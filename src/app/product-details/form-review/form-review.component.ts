import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-review-app',
  templateUrl: 'form-review.component.html',
  styleUrls: ['form-review.component.scss']
})

export class FormReviewComponent implements OnInit {
  public currentRate: number = 0;
  constructor() {
  }
  public test(a) {
    console.log(a);
  }
  ngOnInit() {
  }
}
