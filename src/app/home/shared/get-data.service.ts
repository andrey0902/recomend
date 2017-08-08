/**
 * Created by andrei on 30.07.2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Product } from './product.model';

@Injectable()
export class GetDataService {
  constructor(private http: Http) {
  }

  public getListProduct (): Observable<Product[]> {
    let header = new RequestOptions({
      headers: new Headers({})
    });
    //tslint:disable
    return this.http.get('http://smktesting.herokuapp.com/api/products/', header).map((response) => {
      let res: [any] = response.json();
      let result: Product[] = [];
      res.forEach((item) => {
        console.log(item);
        let a = new Product( item.tittle, item.id, item.img, item.text);
        result.push(a);
      });
      return result;
    });
  }
}

