import { Component, Input, OnInit } from '@angular/core';
import { ReviewModel } from '../../shared/models/review.model';
import { GetDataService } from '../../shared/services/get-data.service';
import { ReviewStateService } from '../shared/review-state.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'reviews-list-app',
  templateUrl: 'reviews-list.component.html',
  styleUrls: ['reviews-list.component.scss']
})

export class ReviewsListComponent implements Input, OnInit {
  @Input() public reviews: ReviewModel[];
  private productId: number;

  constructor(private activatedRoute: ActivatedRoute,
              private getDataService: GetDataService,
              private reviewStateService: ReviewStateService) {
  }

  public ngOnInit() {
    this.productId = this.activatedRoute.snapshot.params['id'];
    this.reviewStateService.state.subscribe((res) => {
      if (res) {
        this.getDataService.getProduct(this.productId)
          .subscribe((result) => {
            this.reviews = result.reviews;
            console.log('!!_!_!_!_!!', result);
          });
      }
    });
  }
}
