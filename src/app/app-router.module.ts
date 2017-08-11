import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NoContentComponent } from './no-content/no-content.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/404'
      },
      {
        path: '404',
        component: NoContentComponent,
        pathMatch: 'full',
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRouterModule {}

