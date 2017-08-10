import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details.component';
import { MyAuthService } from '../core/my-auth.service';
import { ProductDetailResolveService } from './description/shared/product-detail-resolve.service';

@NgModule({
 imports: [
   RouterModule.forChild([
        {
          path: 'product/:id',
          component: ProductDetailsComponent,
          /*canActivate: [MyAuthService],*/
          resolve: {
            product: ProductDetailResolveService
          }
        },
   ])
 ],
 exports: [RouterModule],
})
export class ProductDetailsRouterModule { }
