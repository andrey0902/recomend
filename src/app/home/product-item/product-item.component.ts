import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../shared/product.model';
import { settings } from '../../core/settings';

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
  public ngOnInit() {
    console.log(this.item);
  }
}
