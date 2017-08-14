/**
 * Created by andrei on 30.07.2017.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { HomeRouterModule } from './home-router.module';
import { HomeComponent } from './home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdCardModule,  MdIconModule } from '@angular/material';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { GetDataService } from '../shared/services/get-data.service';

@NgModule({
  imports: [
    CommonModule,
    HomeRouterModule,
   /* SharedModule,*/
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdIconModule,
    MdCardModule,
    HttpModule
  ],
  exports: [],
  declarations: [
    HomeComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  providers: [
    GetDataService
  ]
})
export class HomeModule {}
