import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { MyAuthService } from '../../../core/my-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-block-component-app',
  templateUrl: 'user-block.component.html',
  styleUrls: ['user-block.component.scss']
})

export class UserBlockComponent implements OnInit {
  public userData: any;
  constructor(
    private serviceStorage: StorageService,
    private myAuthservice: MyAuthService,
    private router: Router) {
  }

  public ngOnInit() {
    this.userData = this.serviceStorage.getStorage('userData');
    console.log(this.userData, 5555);
  }
  public logOut() {
    this.myAuthservice.logOut('a').subscribe((res) => {
      console.log(res);
    });
    console.log('a');
  }
}
