import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { settings } from '../../core/settings';
import { CartStatCountService } from '../../shared/services/cart-stat-count.service';
import { CartService } from '../../shared/services/cart.service';
import { MyAuthService } from '../../core/my-auth.service';

@Component({
  selector: 'description-component-app',
  templateUrl: 'description.component.html',
  styleUrls: ['description.component.scss']
})

export class DescriptionComponent implements Input, OnInit, OnDestroy {
  public isLogin: boolean;
  public http: string = settings.defaultHttp;
  @Input() public product: Product;
  private isSubscribe;
  constructor(
    private cartService: CartService,
    private cartStatCountService: CartStatCountService,
    private myAuthService: MyAuthService
  ) {}
  public buyProduct(item) {
    this.cartService.addProductInCart(item);
    this.cartStatCountService.state = 'item';
  }
  public ngOnInit() {
    this.isUserLogin();
    this.isSubscribe = this.myAuthService.state.subscribe((res) => {
      this.isUserLogin();
    });
  }
  public ngOnDestroy() {
    this.isSubscribe.unsubscribe();
  }

  private isUserLogin() {
    this.isLogin = this.myAuthService.canActivate();
  }
}
