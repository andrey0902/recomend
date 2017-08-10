import { Component, Input } from '@angular/core';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'description-component-app',
  templateUrl: 'description.component.html',
  styleUrls: ['description.component.scss']
})

export class DescriptionComponent implements Input {
  @Input() public product: Product;
}
