
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { SignInComponent } from './sign-in/sign-in-component';
import { SignUpComponent } from './sign-up/sign-up-component';
import { AuthGuard } from './shared/authGuard.service';
import { CartComponent } from '../cart/cart.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'cart',
        pathMatch: 'full',
        component: CartComponent,
        canActivate: [AuthGuard],
      },
    ])
  ],
  exports: [RouterModule]
})
export class IntermediateRouterModule {
}
