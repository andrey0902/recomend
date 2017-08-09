import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'user-block-component-app',
  templateUrl: 'user-block.component.html',
  styleUrls: ['user-block.component.scss']
})

export class UserBlockComponent implements OnInit {
  public userData: any;
  constructor(private serviceStorage: StorageService) {
  }

  public ngOnInit() {
    this.serviceStorage.getStorage('userData');
  }
}
