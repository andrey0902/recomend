import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CanActivate, Router } from '@angular/router';

import { StorageService } from '../shared/services/storage.service';
import { settings } from './settings';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MyAuthService implements CanActivate{
  constructor(
    private http: Http,
    private storageService: StorageService,
    private router: Router) {
  }
  public signUpUser(data): Observable<any> {
   return this.http.post(settings.defaultHttp + 'api/register/', data)
      .map((res) => {
        console.log(res.json());
        return res.json();
      });
  }
  public signInUser(data): Observable<any> {
   return this.http.post(settings.defaultHttp + 'api/login/', data)
      .map((res) => {
        console.log(res.json());
        return res.json();
      });
  }
  public logOut(data) {
    return this.http.post(settings.defaultHttp + 'logout', data).map((res) => {
      console.log(res.json());
      return res.json();
    });
  }
  public canActivate() {
    //tslint:disable
     return !!this.storageService.getStorage('token');
  }
}
