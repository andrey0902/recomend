/**
 * Created by andrei on 14.08.2017.
 */
import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'cart-icon-app',
  templateUrl: 'cart-icon.component.html',
  styleUrls: ['cart-icon.component.scss']
})
export class CartIconComponent implements OnInit {
  public uniqueCount: number;
  public show: boolean;

  constructor(private cartService: CartService) {
  }

  public ngOnInit() {
    this.cartService.getCart().then((res) => {
      console.log('Cat Product', res);
      this.uniqueCount = this.cartService.unique(res);
    });
    this.show = false;
  }
  public showCart() {
    this.show = !this.show;
  }
}
