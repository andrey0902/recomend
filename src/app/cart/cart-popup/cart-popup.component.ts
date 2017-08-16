/**
 * Created by andrei on 14.08.2017.
 */

import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';
import { settings } from '../../core/settings';
import { CartProductModel } from '../../shared/models/cart-product.model';
import { CartStatCountService } from '../../shared/services/cart-stat-count.service';

@Component({
  selector: 'cart-popup-app',
  templateUrl: 'cart-popup.component.html',
  styleUrls: ['cart-popup.component.scss']
})
export class CartPopupComponent implements OnInit, Input {
  public productCart: CartProductModel[];
  constructor(private cartService: CartService,
              private cartStatCountService: CartStatCountService) {
  }

  public get pathImg() {
    return settings.defaultHttp + 'static/';
  }

  public get totalCount() {
    let total: number = 0;
    if (this.productCart) {
      this.productCart.forEach((elm: CartProductModel) => {
        total += (elm.count * elm.price);
      });
    }
    return total;
  }
  public delete(item: CartProductModel) {
    this.cartService.removeProductCart(item.productId).then((result) => {
      this.productCart = result;
      this.cartStatCountService.state = 'next';
    });
  }

  public ngOnInit() {
    this.cartService.getCart().then((res) => {
      this.productCart = res;
    });
  }

  public changeCount(productId: number, countValue: number) {
    console.log( productId, countValue);
    this.cartService.changeCountProduct(productId, +countValue)
      .then((res) => {
      this.productCart = res;
      });
  }
}
