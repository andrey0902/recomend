/**
 * Created by andrei on 08.08.2017.
 */
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyAuthService } from '../../core/my-auth.service';
import { StorageService } from '../../shared/services/storage.service';
import { UserModel } from '../../shared/models/user.model';
import { UserStateService } from '../../shared/services/user-state.service';

@Component({
  selector: 'sign-in-app',
  templateUrl: 'sign-in-component.html',
  styleUrls: ['sign-in-component.scss']
})
export class SignInComponent {
  public formSignIn: FormGroup;
  public serverError: boolean;
  public showError: boolean;
  constructor(private router: Router,
              private myAuthService: MyAuthService,
              private storageService: StorageService,
              private userStateService: UserStateService) {
    this.formSignIn = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(5)
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(5)
      ])
    });
  }

  public signInUser($event, data, valid) {
    $event.preventDefault();
    let userData: UserModel;
    if (valid) {
      userData = new UserModel(data.name, data.password);
      this.myAuthService.signInUser(userData).subscribe((res) => {
        console.log(res);
        if (res.success) {
          this.storageService.setStorage('userData', userData.username);
          this.storageService.setStorage('token', res.token);
          this.userStateService.state = 'ddd';
          this.router.navigate(['/']);
          this.serverError = false;
          return;
        }
        this.serverError = true;
        console.log('error', res);
      });
      console.log($event, data, valid, userData);
    }
    console.log($event, data, valid);
  }
  public test(name) {
    console.log('control', this.formSignIn.get(name));
  }
}
