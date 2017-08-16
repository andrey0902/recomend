import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { settings } from '../../core/settings';
import { Product } from '../../shared/models/product.model';
import { CartService } from '../../shared/services/cart.service';
import { CartStatCountService } from '../../shared/services/cart-stat-count.service';
import { MyAuthService } from '../../core/my-auth.service';

@Component({
  selector: 'product-item-app',
  templateUrl: 'product-item.component.html',
  styleUrls: ['product-item.component.scss']
})
export class ProductItemComponent implements Input, OnInit, OnDestroy {
  public isLogin: boolean;
  private isSubscribe;

  public get pathImg() {
    return settings.defaultHttp + 'static/';
  }

  @Input() public item: Product;

  constructor(private cartService: CartService,
              private cartStatCountService: CartStatCountService,
              private myAuthService: MyAuthService) {
  }

  public ngOnInit() {
    this.isUserLogin();
    this.isSubscribe = this.myAuthService.state.subscribe((res) => {
      this.isUserLogin();
    });
  }

  public buyProduct(item) {
    this.cartService.addProductInCart(item);
    this.cartStatCountService.state = 'item';
  }

  public ngOnDestroy() {
    this.isSubscribe.unsubscribe();
  }

  private isUserLogin() {
    this.isLogin = this.myAuthService.canActivate();
  }
}
