/**
 * Created by andrei on 14.08.2017.
 */
import { Component, OnInit } from '@angular/core';
import { CartProductModel } from '../shared/models/cart-product.model';
import { settings } from '../core/settings';
import { CartStatCountService } from '../shared/services/cart-stat-count.service';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'cart-app',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.scss']
})
export class CartComponent implements OnInit {
  public productCart: CartProductModel[];
  constructor(private cartService: CartService,
              private cartStatCountService: CartStatCountService) {
  }
  public get pathImg() {
    return settings.defaultHttp + 'static/';
  }
  public ngOnInit() {
    this.cartService.getCart().then((res) => {
      console.log('Cat Product----------------------', res);
      this.productCart = res;
    });
  }
}
