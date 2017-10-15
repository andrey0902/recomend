import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material';
import { UserBlockComponent } from './components/user-block/user-block.component';
import { StorageService } from './services/storage.service';
import { GetDataService } from './services/get-data.service';
import { FooterComponent } from './components/footer/footer.component';
import { ValidationComponent } from './components/validation/validation.component';
import { CartModule } from '../cart/cart.module';
import { CartService } from './services/cart.service';
import { CartStatCountService } from './services/cart-stat-count.service';
import { ApiStorageService } from './services/api-storage.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CartModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  exports: [
    HeaderComponent,
    UserBlockComponent,
    FooterComponent,
    ValidationComponent,
  ],
  declarations: [
    HeaderComponent,
    UserBlockComponent,
    FooterComponent,
    ValidationComponent,
  ],
  providers: [
    StorageService,
    GetDataService,
    CartService,
    CartStatCountService,
    ApiStorageService
  ],
})
export class SharedModule {
}
