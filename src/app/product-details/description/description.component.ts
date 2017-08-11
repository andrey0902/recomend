import { Component, Input } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { settings } from '../../core/settings';

@Component({
  selector: 'description-component-app',
  templateUrl: 'description.component.html',
  styleUrls: ['description.component.scss']
})

export class DescriptionComponent implements Input {
  public http: string = settings.defaultHttp;
  @Input() public product: Product;
}
