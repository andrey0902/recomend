/**
 * Created by andrei on 30.07.2017.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
      path: '',
      component: HomeComponent
    }
    ])
  ],
  exports: [RouterModule]
})
export class HomeRouterModule {}

