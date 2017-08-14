import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private activatedRoute: ActivatedRoute) {
  }

  public ngOnInit() {
    this.productId = this.activatedRoute.snapshot.params['id'];
    this.subscription = this.activatedRoute.data.subscribe((data: any) => {
      this.productData = data.product;
    });

  }
  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
