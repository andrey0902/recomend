import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { CartProductModel } from '../models/cart-product.model';

@Injectable()
export class ApiStorageService {
  private cart: CartProductModel[] = [];

  constructor(private storageService: StorageService) {
    this.getFromStorage();
  }

  public getFromStorage() {
    let res = this.storageService.getStorage('cart');
    if (res) {
      for (let cartItem of res) {
        this.cart.push(new CartProductModel(cartItem.productId, cartItem.productTitle,
          cartItem.poductImg,
          cartItem.productText,
          cartItem.count,
          cartItem.price));
      }
    }
  }

  public getAllCart(): Promise<CartProductModel[]> {
    console.log('+++++++', this.cart);

    console.log('+++++++', this.cart);

    return this.setPromise(this.cart);
  }

  public addProductInCart(product: any) {
    if (this.cart.find((elem) => {
        if (+elem.productId === +product.id) {
          elem.count++;
          return true;
        }
      })) {
      this.setCat(this.cart);
      return this.setPromise(this.cart);
    }
    this.cart.push(new CartProductModel(
      product.id,
      product.title,
      product.img,
      product.test,
      1,
      product.price));
    this.setCat(this.cart);
    return this.setPromise(this.cart);
  }
  public removeProduct(id: number) {
    this.cart.splice( this.cart.findIndex((element) => {
      if (element.productId === id ) {
        return true;
      }
    }), 1);
    this.setCat(this.cart);
    return this.setPromise(this.cart);
  }
  public unique() {
    let result = {};
    this.cart.forEach((el) => {
      result[el.productId] = true;
    });
    return this.setPromise(Object.keys(result).length);
  }

  public setCat(data) {
    this.storageService.setStorage('cart', data);
  }

  public changeCountProduct(id: number, count: number) {
    this.cart.forEach((elem) => {
      if (elem.productId === id) {
        elem.count = count;
      }
    });
    this.setCat(this.cart);
    return this.setPromise(this.cart);
  }

  private setPromise(data: any) {
    return Promise.resolve(data);
  }
}
