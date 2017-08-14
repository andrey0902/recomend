/**
 * Created by andrei on 30.07.2017.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { SignInComponent } from './sign-in/sign-in-component';
import { SignUpComponent } from './sign-up/sign-up-component';
import { AuthGuard } from './shared/authGuard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'sign-up',
        pathMatch: 'full',
        component: LoginComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            component: SignUpComponent
          },
        ]
      },
      {
        path: 'sign-in',
        pathMatch: 'full',
        canActivate: [AuthGuard],
        component: LoginComponent,
        children: [
          {
            path: '',
            component: SignInComponent
          }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class LoginRouterModule {
}
