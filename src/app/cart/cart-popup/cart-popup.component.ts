/**
 * Created by andrei on 14.08.2017.
 */

import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { CartProductModel } from '../shared/cart-product.model';
import { settings } from  '../../core/settings';
@Component({
  selector: 'cart-popup-app',
  templateUrl: 'cart-popup.component.html',
  styleUrls: ['cart-popup.component.scss']
})
export class CartPopupComponent implements OnInit {
  public productCart: CartProductModel[];

  constructor(private cartService: CartService) {
  }
  public get pathImg() {
    return settings.defaultHttp + 'static/';
  }
  public ngOnInit() {
    this.cartService.getCart().then((res) => {
      console.log('Cat Product', res);
      this.productCart = res;
    });
  }
}
