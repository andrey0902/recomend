/**
 * Created by andrei on 08.08.2017.
 */
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MyAuthService } from '../../core/my-auth.service';
import { UserModel } from '../../shared/models/user.model';

@Component({
  selector: 'sign-in-app',
  templateUrl: 'sign-in-component.html',
  styleUrls: ['sign-in-component.scss']
})
export class SignInComponent {
  public formSignIn: FormGroup;
  public serverError: boolean;
  public showError: boolean;

  constructor(private myAuthService: MyAuthService) {
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
        if (!res.success) {
          this.serverError = true;
          return;
        }
        this.serverError = false;
      });
    }
  }
}
