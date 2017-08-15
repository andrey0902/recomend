import { Component, Input } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { settings } from '../../core/settings';
import { CartStatCountService } from '../../shared/services/cart-stat-count.service';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'description-component-app',
  templateUrl: 'description.component.html',
  styleUrls: ['description.component.scss']
})

export class DescriptionComponent implements Input {
  public http: string = settings.defaultHttp;
  @Input() public product: Product;
  constructor(
    private cartService: CartService,
    private cartStatCountService: CartStatCountService
  ) {}
  public buyProduct(item) {
    this.cartService.addProductInCart(item);
    this.cartStatCountService.state = 'item';
  }
}
