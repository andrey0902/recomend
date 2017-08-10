import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Product } from '../../../shared/models/product.model';
import { GetDataService } from '../../../shared/services/get-data.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductDetailResolveService implements Resolve<Product> {
  constructor(private getDataService: GetDataService,
              private router: Router) {
  }

  public resolve(route: ActivatedRouteSnapshot): Observable<any> | any {
    let id = route.params.id;
    return this.getDataService.getProduct(id).map((product) => {
      if (product) {
        return product;
      } else {
        this.router.navigate(['/']);
        return false;
      }
    });
  }
}
