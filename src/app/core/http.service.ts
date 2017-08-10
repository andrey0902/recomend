import { Injectable } from '@angular/core';
import { Http, RequestOptions, Request, RequestOptionsArgs, Response, Headers, ConnectionBackend } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { SessionService } from './session.service';

@Injectable()
export class HttpService extends Http {
  constructor(_backend: ConnectionBackend,
              _defaultOptions: RequestOptions,
              private session: SessionService) {
    super(_backend, _defaultOptions
    );
  }

  /**
   * for adding of a token in a request
   * @param url - Request
   * @param _defaultOptions - RequestOptionsArgs
   * @returns Observable<Response>
   */
  public request(url: string | Request,
                 _defaultOptions?: RequestOptionsArgs): Observable<Response> {
    if (this.session.token) {
      if (typeof url === 'string') {
        if (!_defaultOptions) {
          _defaultOptions = {headers: new Headers()};
        }
        _defaultOptions.headers.set('Authorization', `Token ${this.session.token}`);
      } else {
        url.headers.set('Authorization', `Token ${this.session.token}`);
      }
    }

    return super.request(url, _defaultOptions).catch(this.catchAuthError(this));
  }

  private catchAuthError(self: HttpService) {
    return (res: Response) => {
      console.log(res);
      if (res.status === 401 || res.status === 403) {
        console.log(res);
      }
      return Observable.throw(res);
    };
  }
}
