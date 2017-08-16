/**
 * Created by andrei on 14.08.2017.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdButtonToggleModule,
  MdInputModule,
} from '@angular/material';
import { AuthGuard } from './shared/authGuard.service';
import { IntermediateRouterModule } from './intermediate.router.module';
import { CartIconComponent } from './cart-icon/cart-icon.component';
import { CartComponent } from './cart.component';
import { CartPopupComponent } from './cart-popup/cart-popup.component';
import { CloseCartDirective } from './shared/close-cart.directive';
import { ToggleClassDirective } from './shared/toggle-class.directive';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MdButtonModule,
    RouterModule,
    MdButtonToggleModule,
    MdInputModule,
    HttpModule,
  ],
  exports: [
    CartIconComponent,
    CartComponent,
    CartPopupComponent,
  ],
  declarations: [
    CartIconComponent,
    CartComponent,
    CartPopupComponent,
    CloseCartDirective,
    ToggleClassDirective
  ],
  providers: []
})
export class CartModule {
}
