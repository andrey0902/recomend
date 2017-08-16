import { Component, OnInit } from '@angular/core';

import { GetDataService } from '../../shared/services/get-data.service';
import { Product } from '../../shared/models/product.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

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
    this.test().subscribe((res) => {
      console.log(res);
    });
  }
  public test(): Observable<any> {
    return Observable.of({a: 5, b: 6});
  }
  public getData() {
    this.service.getListProduct().subscribe((response) => {
      this.data = response;
      console.log(this.data);
    });
  }
}
