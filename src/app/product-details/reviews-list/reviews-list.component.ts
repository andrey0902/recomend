import { Component, Input, OnInit } from '@angular/core';
import { ReviewModel } from '../../shared/models/review.model';

@Component({
  selector: 'reviews-list-app',
  templateUrl: 'reviews-list.component.html',
  styleUrls: ['reviews-list.component.scss']
})

export class ReviewsListComponent implements Input {
  @Input() public reviews: ReviewModel[];
}
