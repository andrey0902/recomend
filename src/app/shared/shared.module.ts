import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdIconModule } from '@angular/material';
import { UserBlockComponent } from './components/user-block/user-block.component';
import { StorageService } from './services/storage.service';
import { GetDataService } from './services/get-data.service';
import { FooterComponent } from './components/footer/footer.component';
import { ValidationComponent } from './components/validation/validation.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    MdIconModule,
  ],
  exports: [
    HeaderComponent,
    UserBlockComponent,
    FooterComponent,
    ValidationComponent,
    CartComponent,
  ],
  declarations: [
    HeaderComponent,
    UserBlockComponent,
    FooterComponent,
    ValidationComponent,
    CartComponent
  ],
  providers: [
    StorageService,
    GetDataService,
  ],
})
export class SharedModule {
}
