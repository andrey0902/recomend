/**
 * Created by andrei on 30.07.2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Product } from '../models/product.model';
import { settings } from '../../core/settings';
import 'rxjs/add/operator/mergeMap';
import { ReviewModel } from '../models/review.model';

@Injectable()
export class GetDataService {
  constructor(private http: Http,
              private router: Router) {
  }

  public getListProduct(): Observable<Product[]> | any {

    return this.http.get(`${settings.defaultHttp}api/products/`, {})
      .map((response) => {
        let res: [any] = response.json();
        let result: Product[] = [];
        res.forEach((item) => {
          let a = new Product(item.title, item.id, item.img, item.text);
          result.push(a);
        });
        return result;
      });
  }

  public getProduct(id) {
    return this.http.get(`${settings.defaultHttp}api/products/`, {})
      .map((res) => {
        let result = res.json();
        for (let obj of result) {
          if (+obj.id === +id) {
            return new Product(obj.title, obj.id, obj.img, obj.text);;
          }
        }
        this.router.navigate(['/404']);
      })
      .flatMap((product) => {
        if (product) {
          return this.getReviews(product.id).map((res) => {
            return {
              product,
              reviews: res
            };
          });
        }
        return [];
      });
  }

  public getReviews(id: number) {
    return this.http.get(`${settings.defaultHttp}/api/reviews/${id}`, {})
      .map((elem) => {
        let result = elem.json();
        let reviews: ReviewModel[] = [];
        if (result) {
          for (let obj of result) {
            reviews.push(new ReviewModel(
              obj.rate,
              obj.text,
              obj.created_at,
              obj.created_by.username,
            ));
          }
        }
        return reviews.reverse();
      });
  }

  public postProductReview(id, review) {
    return this.http.post(`${settings.defaultHttp}api/reviews/${id}`, review)
      .map((res) => {
        return res.json();
      });
  }
}
