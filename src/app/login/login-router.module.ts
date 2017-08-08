/**
 * Created by andrei on 30.07.2017.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { SignInComponent } from './sign-in/sign-in-component';
import { SignUpComponent } from './sign-up/sign-up-component';

@NgModule({
  imports: [
    RouterModule.forChild([
/*      {
        path: 'test',
        component: LoginComponent
      },
      {
        path: 'sign-in',
        component: SignInComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      }*/
{
      path: 'sign-up',
      pathMatch: 'full',
      component: LoginComponent,
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
export class LoginRouterModule {}
console.log(1);
