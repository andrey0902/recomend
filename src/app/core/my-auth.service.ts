import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { StorageService } from '../shared/services/storage.service';
import { settings } from './settings';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MyAuthService {
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
  public signInUser(data) {
    this.http.post(settings.defaultHttp + 'api/login/', data)
      .map((res) => {
        console.log(res.json());
      });
  }
  public logOut() {
    this.storageService.setStorage('token', null);
    this.storageService.setStorage('userData', null);
    this.router.navigate(['/']);
  }
}
