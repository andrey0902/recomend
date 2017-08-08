/**
 * Created by andrei on 30.07.2017.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { HomeRouterModule } from './home-router.module';
import { HomeComponent } from './home.component';
import { GetDataService } from './shared/get-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdCardModule } from '@angular/material';

@NgModule({
  imports: [
    HomeRouterModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    HttpModule
  ],
  exports: [],
  declarations: [
    HomeComponent
  ],
  providers: [
    GetDataService
  ]
})
export class HomeModule {}
