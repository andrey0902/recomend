/**
 * Created by andrei on 14.08.2017.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatInputModule,
} from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from './shared/authGuard.service';
import { IntermediateRouterModule } from './intermediate.router.module';
import { CartModule } from '../cart/cart.module';

@NgModule({
  imports: [
    CommonModule,
    CartModule,
    SharedModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    IntermediateRouterModule,
    HttpModule,
  ],
  exports: [],
  declarations: [],
  providers: [
    AuthGuard
  ]
})
export class IntermediateModule {
}
