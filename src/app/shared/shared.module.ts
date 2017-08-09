import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdCardModule,  MdIconModule } from '@angular/material';
import { UserBlockComponent } from './components/user-block/user-block.component';
import { StorageService } from './services/storage.service';

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
  ],
  declarations: [
    HeaderComponent,
    UserBlockComponent,
  ],
  providers: [
    StorageService
  ],
})
export class SharedModule {
}
