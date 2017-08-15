import { Component, Input, OnInit } from '@angular/core';

import { settings } from '../../core/settings';
import { Product } from '../../shared/models/product.model';
import { CartService } from '../../shared/services/cart.service';
import { CartStatCountService } from '../../shared/services/cart-stat-count.service';

@Component({
  selector: 'product-item-app',
  templateUrl: 'product-item.component.html',
  styleUrls: ['product-item.component.scss']
})
export class ProductItemComponent implements Input, OnInit {
  public get pathImg() {
    return settings.defaultHttp + 'static/';
  }
  @Input()  public item: Product;
  constructor(
    private cartService: CartService,
    private cartStatCountService: CartStatCountService
  ) {}
  public ngOnInit() {
    console.log(this.item);
  }
  public buyProduct(item) {
    this.cartService.addProductInCart(item);
    this.cartStatCountService.state = 'item';
  }
}
