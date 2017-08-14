import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NameComponent } from './name.component';
import { ProductDetailsRouterModule } from './product-details-router.module';
import { ProductDetailsComponent } from './product-details.component';
import { DescriptionComponent } from './description/description.component';
import { ProductDetailResolveService } from './description/shared/product-detail-resolve.service';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';
import { ReviewsItemComponent } from './review-item/reviews-item.component';
import { FormReviewComponent } from './form-review/form-review.component';
import { MdCardModule, MdButtonModule } from '@angular/material';
import { ReviewStateService } from './shared/review-state.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SharedModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdButtonModule,
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
  providers: [
    ProductDetailResolveService,
    ReviewStateService
  ],
})
export class ProductDetailsModule {
}
