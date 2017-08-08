/**
 * Created by andrei on 30.07.2017.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { LoginRouterModule } from './login-router.module';
import { LoginComponent } from './login.component';
import { SignUpComponent } from './sign-up/sign-up-component';
import { SignInComponent } from './sign-in/sign-in-component';

@NgModule({
  imports: [
    CommonModule,
    LoginRouterModule,
    HttpModule
  ],
  exports: [],
  declarations: [
    LoginComponent,
    SignUpComponent,
    SignInComponent,
  ],
  providers: []
})
export class LoginModule {}
