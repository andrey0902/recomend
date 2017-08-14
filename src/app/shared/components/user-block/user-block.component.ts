import { Component, OnDestroy, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { MyAuthService } from '../../../core/my-auth.service';

@Component({
  selector: 'user-block-component-app',
  templateUrl: 'user-block.component.html',
  styleUrls: ['user-block.component.scss']
})

export class UserBlockComponent implements OnInit, OnDestroy {
  public userData: any;
  public isSubscribe;

  constructor(private serviceStorage: StorageService,
              private myAuthService: MyAuthService) {
  }

  public ngOnInit() {
    this.getUserData();
    this.isSubscribe = this.myAuthService.state.subscribe(() => {
      this.getUserData();
    });
  }

  public logOut() {
    this.myAuthService.logOut().subscribe(() => {
      this.getUserData();
    });
    this.myAuthService.state = 'logOut';
  }

  public ngOnDestroy() {
    this.isSubscribe.unsubscribe();
  }

  private getUserData() {
    this.userData = this.serviceStorage.getStorage('userData');
  }

}
