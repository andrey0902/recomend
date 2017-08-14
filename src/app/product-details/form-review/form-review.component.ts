import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ReviewModel } from '../../shared/models/review.model';
import { GetDataService } from '../../shared/services/get-data.service';
import { ReviewStateService } from '../shared/review-state.service';
import { StorageService } from '../../shared/services/storage.service';
import { MyAuthService } from '../../core/my-auth.service';

@Component({
  selector: 'form-review-app',
  templateUrl: 'form-review.component.html',
  styleUrls: ['form-review.component.scss']
})

export class FormReviewComponent implements OnInit, OnDestroy {
  public currentRate: number = 0;
  public formReview: FormGroup;
  public showError: boolean;
  public isLogin: boolean;
  public isSubscribe: any;
  private productId: number;

  constructor(private activatedRoute: ActivatedRoute,
              private getDataService: GetDataService,
              private reviewStateService: ReviewStateService,
              private storageService: StorageService,
              private myAuthService: MyAuthService) {
  }

  public ngOnInit() {
    this.formReview = new FormGroup({
      text: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100)
      ])
    });
    this.productId = this.activatedRoute.snapshot.params['id'];
    this.isLogin = !!this.storageService.getStorage('token');
    this.isSubscribe = this.myAuthService.state.subscribe((res) => {
      this.isLogin = false;
    });
  }

  public sendReview($event, form: FormGroup, valid) {
    let review: ReviewModel;
    if (valid) {
      review = new ReviewModel(this.currentRate, form.value.text);
      this.getDataService.postProductReview(this.productId, review)
        .subscribe((res) => {
          if (res.success) {
            this.reviewStateService.state = 'next';
            console.log(review);
          }
        });
      form.reset();
      this.currentRate = 0;
    }
  }

  public ngOnDestroy() {
    this.isSubscribe.unsubscribe();
  }
}
