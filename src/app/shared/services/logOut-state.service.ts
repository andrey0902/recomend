import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class LogOutStateService {
  private behaviorSubject: Subject<any>;
  constructor() {
    this.behaviorSubject = new Subject();
  }
  public get state() {
    return this.behaviorSubject.asObservable();
  }
  public set state(data: any) {
    this.behaviorSubject.next(data);
  }
}
