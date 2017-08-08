import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SignInComponent } from './login/sign-in/sign-in-component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
/*      {
        path: 'sign-in',
        component: LoginComponent
      },
           {
        path: 'sign-up',
             component: LoginComponent
       },*/
  /*    {
        path: 'sign-up',

        loadChildren: 'app/login/login.module#LoginModule'
      }*/
    ])
  ],
  exports: [RouterModule]
})
export class AppRouterModule {}

