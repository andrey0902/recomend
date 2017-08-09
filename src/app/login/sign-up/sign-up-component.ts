/**
 * Created by andrei on 08.08.2017.
 */

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MyAuthService } from '../../core/my-auth.service';
import { UserModel } from '../../shared/models/user.model';
import { StorageService } from '../../shared/services/storage.service';

@Component({
  selector: 'sign-up-app',
  templateUrl: 'sign-up-component.html',
  styleUrls: ['sign-up-component.scss']
})
export class SignUpComponent {
  public formSignUp: FormGroup;
  constructor(
    private myAuthService: MyAuthService,
    private storageService: StorageService,
    private router: Router
  ) {
    this.formSignUp = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      confirmPassword: new FormControl(null, [Validators.required])
    });
  }
  public signUpUser($event, data , valid) {
    $event.preventDefault();
    let user: UserModel;
    if (valid) {
      user = new UserModel(data.name, data.password);
      this.myAuthService.signUpUser(user).subscribe((res) => {
        console.log(res);
        if (res.success) {
          this.storageService.setStorage('token', res.token);
          this.router.navigate(['/sign-in']);
          return;
        }
      });
    }
    console.log($event, data , valid, user);
  }
}
