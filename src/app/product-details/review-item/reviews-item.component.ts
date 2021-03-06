import { Component, Input, OnInit } from '@angular/core';
import { ReviewModel } from '../../shared/models/review.model';

@Component({
  selector: 'reviews-item-app',
  templateUrl: 'reviews-item.component.html',
  styleUrls: ['reviews-item.component.scss']
})

export class ReviewsItemComponent implements Input, OnInit {
  @Input() public review: ReviewModel;
  public currentRate: number;
  public ngOnInit() {
    this.currentRate = this.review.rate;
    console.log('this.currentRate', this.currentRate);
  }
}
