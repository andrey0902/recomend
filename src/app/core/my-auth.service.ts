import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { StorageService } from '../shared/services/storage.service';
import { settings } from './settings';

@Injectable()
export class MyAuthService {
  constructor(
    private http: Http,
    private storageService: StorageService) {
  }
  public signUpUser(data) {
    this.http.post(settings.defaultHttp + '', {})
      .map((res) => {
        console.log(res.json());
      });
  }
  public signInUser(data) {
    this.http.post(settings.defaultHttp + '', {})
      .map((res) => {
        console.log(res.json());
      });
  }
}
