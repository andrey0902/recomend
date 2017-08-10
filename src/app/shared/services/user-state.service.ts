import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserStateService {
  private behaviorSubject: BehaviorSubject<any>;
  constructor() {
    this.behaviorSubject = new BehaviorSubject(null);
  }
  public get state() {
    return this.behaviorSubject.asObservable();
  }
  public set state(data: any) {
    this.behaviorSubject.next(data);
  }
}
