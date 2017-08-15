/**
 * Created by andrei on 14.08.2017.
 */
/*import { Injectable } from '@angular/core';

import { CartProductModel } from './cart-product.model';

const cart = [
  new CartProductModel(1, 'product1', 'img1.png', 'lorem ipsum 1', 5, (5 * 50), 50),
  new CartProductModel(2, 'product1', 'img2.png', 'lorem ipsum 2', 3, (3 * 50), 50),
  new CartProductModel(3, 'product1', 'img1.png', 'lorem ipsum 1', 5, (5 * 50), 50),
];

@Injectable()
export class CartService {
  public getCart(): Promise<CartProductModel[]> {
    return Promise.resolve(cart);
  }
  public unique(arr: CartProductModel[] ) {
    let result = {};
    arr.forEach((el) => {
      result[el.productId] = true;
    });
    return Object.keys(result).length;
  }
}*/
