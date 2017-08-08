/**
 * Created by andrei on 30.07.2017.
 */
import { Component, OnInit } from '@angular/core';
import { GetDataService } from './shared/get-data.service';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private service: GetDataService) {}
  public ngOnInit() {
    this.getData();
  }
  public getData() {
    this.service.getListProduct().subscribe((response) => {
      console.log(response);
    });
  }
}
