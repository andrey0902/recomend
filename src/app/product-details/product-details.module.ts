import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NameComponent } from './name.component';
import { ProductDetailsRouterModule } from './product-details-router.module';
import { ProductDetailsComponent } from './product-details.component';
import { DescriptionComponent } from './description/description.component';

@NgModule({
  imports: [
    CommonModule,
    ProductDetailsRouterModule
  ],
  exports: [],
  declarations: [
    ProductDetailsComponent,
    DescriptionComponent,
  ],
  providers: [],
})
export class ProductDetailsModule {
}
