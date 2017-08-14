/**
 * Created by andrei on 30.07.2017.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdButtonToggleModule,
  MdInputModule,
} from '@angular/material';

import { LoginRouterModule } from './login-router.module';
import { LoginComponent } from './login.component';
import { SignUpComponent } from './sign-up/sign-up-component';
import { SignInComponent } from './sign-in/sign-in-component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from './shared/authGuard.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdInputModule,
    LoginRouterModule,
    HttpModule,
  ],
  exports: [],
  declarations: [
    LoginComponent,
    SignUpComponent,
    SignInComponent,
  ],
  providers: [AuthGuard]
})
export class LoginModule {
}
