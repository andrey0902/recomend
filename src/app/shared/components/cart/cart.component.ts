import { Component, Input, OnInit } from '@angular/core';
import { MyAuthService } from '../../../core/my-auth.service';

@Component({
  selector: 'cart-app',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.scss']
})

export class CartComponent implements OnInit, Input {
  public isLogin: boolean;
  @Input() public count: number;
  constructor(public myAuthService: MyAuthService) {
  }

  public ngOnInit() {
    console.log(this.count);
  }
}
