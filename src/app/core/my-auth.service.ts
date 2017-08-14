import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CanActivate, Router } from '@angular/router';

import { StorageService } from '../shared/services/storage.service';
import { settings } from './settings';
import { Observable } from 'rxjs/Observable';
import { SessionService } from './session.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MyAuthService implements CanActivate {
  private subject: Subject<any>;

  constructor(private http: Http,
              private storageService: StorageService,
              private sessionService: SessionService,
              private router: Router) {
    this.subject = new Subject();
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
        let result = res.json();
        if (result.success) {
          this.storageService.setStorage('userData', data.username);
          this.storageService.setStorage('token', result.token);
          this.state = 'ddd';
          this.router.navigate(['/']);
        }
        return result;
      });
  }

  public logOut() {
    return this.http.get(settings.defaultHttp + 'logout/', '').map(() => {
      this.storageService.setStorage('userData', null);
      this.sessionService.token = null;
    });
  }

  public canActivate() {
    return !!this.sessionService.token;
  }

  public get state() {
    return this.subject.asObservable();
  }

  public set state(data: any) {
    this.subject.next(data);
  }
}
