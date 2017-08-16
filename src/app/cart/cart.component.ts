/**
 * Created by andrei on 14.08.2017.
 */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartProductModel } from '../shared/models/cart-product.model';
import { settings } from '../core/settings';
import { CartStatCountService } from '../shared/services/cart-stat-count.service';
import { CartService } from '../shared/services/cart.service';
import { MyAuthService } from '../core/my-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cart-app',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  public productCart: CartProductModel[];
  public countTotal: number;
  private isSubscribe;

  constructor(private cartService: CartService,
              private cartStatCountService: CartStatCountService,
              private myAuthService: MyAuthService,
              private router: Router) {
  }

  public get pathImg() {
    return settings.defaultHttp + 'static/';
  }

  public ngOnInit() {
    this.cartService.getCart().then((res) => {
      this.productCart = res;
    });
    this.getTotal();
    this.isSubscribe = this.myAuthService.state.subscribe((res) => {
      this.router.navigate(['']);
    });
  }

  public removeProduct(product: CartProductModel) {
    if (product.count > 1) {
      product.count--;
      this.cartService.changeCountProduct(product.productId, product.count)
        .then((result) => {
          this.productCart = result;
          this.getTotal();
        });
    }
  }

  public addProduct(product: CartProductModel) {
    if (product.count < 250) {
      product.count++;
      this.cartService.changeCountProduct(product.productId, product.count)
        .then((result) => {
          this.productCart = result;
          this.getTotal();
        });
    }
  }

  public clearProduct(product: CartProductModel) {
    this.cartService.removeProductCart(product.productId)
      .then((result) => {
        this.productCart = result;
        this.getTotal();
        this.cartStatCountService.state = 'next';
      });
  }

  public getTotal() {
    this.cartService.getTotal().then((result: number) => {
      this.countTotal = result;
    });
  }

  public ngOnDestroy() {
    this.isSubscribe.unsubscribe();
  }
}
