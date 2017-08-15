/**
 * Created by andrei on 14.08.2017.
 */
import { Component, OnDestroy, OnInit } from '@angular/core';

import { CartStatCountService } from '../../shared/services/cart-stat-count.service';
import { CartService } from '../../shared/services/cart.service';
import { element } from 'protractor';

@Component({
  selector: 'cart-icon-app',
  templateUrl: 'cart-icon.component.html',
  styleUrls: ['cart-icon.component.scss']
})
export class CartIconComponent implements OnInit, OnDestroy {
  public uniqueCount: number;
  public show: boolean;
  private isSubscrib;
  constructor(
    private cartService: CartService,
    private cartStatCountService: CartStatCountService) {
  }

  public ngOnInit() {
    this.getProduct();
    this.show = false;
    this.isSubscrib = this.cartStatCountService.state.subscribe((e) => {
      this.getProduct();
    });
  }
  public showCart() {
    this.show = !this.show;
  }
  public ngOnDestroy() {
    this.isSubscrib.unsubscribe();
  }
  private getProduct() {
    this.cartService.getCart().then((res) => {
      console.log('Cat Product', res);
      this.cartService.unique().then((result) => {
        this.uniqueCount = result;
      });
    });
  }
}
