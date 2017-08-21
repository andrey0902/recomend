/**
 * Created by andrei on 14.08.2017.
 */
import { Injectable } from '@angular/core';
import { CartProductModel } from '../models/cart-product.model';
import { ApiStorageService } from './api-storage.service';

@Injectable()
export class CartService {
  constructor(private apiStorageService: ApiStorageService) {}
  public getCart(): Promise<CartProductModel[]> {
    return this.apiStorageService.getAllCart();
  }

  public unique() {
    return this.apiStorageService.unique();
  }

  public addProductInCart(product: any) {
    return this.apiStorageService.addProductInCart(product);
  }

  public changeCountProduct(id: number, count: number) {
    return this.apiStorageService.changeCountProduct(id, count);
  }
  public removeProductCart(id: number) {
    return this.apiStorageService.removeProduct(id);
  }
  public getTotal() {
    return this.apiStorageService.getTotalCount();
  }
}
