import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details.component';

@NgModule({
 imports: [
   RouterModule.forChild([
        {
             path: 'product/:id',
             component: ProductDetailsComponent
           },
   ])
 ],
 exports: [RouterModule],
})
export class ProductDetailsRouterModule { }
