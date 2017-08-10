import { Component, OnDestroy, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { MyAuthService } from '../../../core/my-auth.service';
import { UserStateService } from '../../services/user-state.service';

@Component({
  selector: 'user-block-component-app',
  templateUrl: 'user-block.component.html',
  styleUrls: ['user-block.component.scss']
})

export class UserBlockComponent implements OnInit, OnDestroy {
  public userData: any;

  constructor(private serviceStorage: StorageService,
              private myAuthservice: MyAuthService,
              private userStateService: UserStateService) {
  }

  public ngOnInit() {
    this.getUserData();
    this.userStateService.state.subscribe(() => {
      this.getUserData();
    });
  }

  public logOut() {
    this.myAuthservice.logOut().subscribe(() => {
      this.getUserData();
    });
  }

  public ngOnDestroy() {
    this.userStateService.state.unsubscribe();
  }

  private getUserData() {
    this.userData = this.serviceStorage.getStorage('userData');
  }

}
