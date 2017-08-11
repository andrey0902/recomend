import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GetDataService } from '../shared/services/get-data.service';
import { ReviewStateService } from './shared/review-state.service';

@Component({
  selector: 'product-details-app',
  templateUrl: 'product-details.component.html',
  styleUrls: ['product-details.component.scss']
})

export class ProductDetailsComponent implements OnInit, OnDestroy {
  public productData;
  private subscription;
  private productId: number;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private getDataService: GetDataService,
              private reviewStateService: ReviewStateService) {
  }

  public ngOnInit() {
    this.productId = this.activatedRoute.snapshot.params['id'];
    this.subscription = this.activatedRoute.data.subscribe((data: any) => {
      this.productData = data.product;
    });
    this.reviewStateService.state.subscribe((res) => {
      if (res) {
        this.productData = this.getDataService.getProduct(this.productId)
          .subscribe((result) => {
            this.productData = result;
          });
      }
    });
  }
  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
