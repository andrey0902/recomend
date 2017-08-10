import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NameComponent } from './name.component';
import { ProductDetailsRouterModule } from './product-details-router.module';
import { ProductDetailsComponent } from './product-details.component';
import { DescriptionComponent } from './description/description.component';
import { ProductDetailResolveService } from './description/shared/product-detail-resolve.service';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';
import { ReviewsItemComponent } from './review-item/reviews-item.component';
import { FormReviewComponent } from './form-review/form-review.component';
import { MdCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdCardModule,
    ProductDetailsRouterModule
  ],
  exports: [],
  declarations: [
    ProductDetailsComponent,
    DescriptionComponent,
    ReviewsListComponent,
    ReviewsItemComponent,
    FormReviewComponent
  ],
  providers: [ProductDetailResolveService],
})
export class ProductDetailsModule {
}
