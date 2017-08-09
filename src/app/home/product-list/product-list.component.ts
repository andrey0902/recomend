import { Component, OnInit } from '@angular/core';

import { GetDataService } from '../shared/get-data.service';
import { Product } from '../shared/product.model';

@Component({
  selector: 'product-list-app',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public data: Product[];
  constructor(private service: GetDataService) {}
  public ngOnInit() {
    this.getData();
  }
  public getData() {
    this.service.getListProduct().subscribe((response) => {
      this.data = response;
      console.log(this.data);
    });
  }
}
