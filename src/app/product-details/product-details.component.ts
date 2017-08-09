import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GetDataService } from '../shared/services/get-data.service';
@Component({
  selector: 'product-details-app',
  templateUrl: 'product-details.component.html',
  styleUrls: ['product-details.component.scss']
})

export class ProductDetailsComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private getDataService: GetDataService
  ) {
  }

  public ngOnInit() {
    console.log(this.activatedRoute.snapshot.params['id']);
    this.activatedRoute.params.forEach((params: Params) => {
      console.log(params.id);
    });
  }
}
