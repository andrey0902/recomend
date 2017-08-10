import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details.component';
import { MyAuthService } from '../core/my-auth.service';

@NgModule({
 imports: [
   RouterModule.forChild([
        {
          path: 'product/:id',
          component: ProductDetailsComponent,
          canActivate: [MyAuthService],
          resolve: {}
        },
   ])
 ],
 exports: [RouterModule],
})
export class ProductDetailsRouterModule { }
