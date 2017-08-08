import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

import '../styles/styles.scss';
import '../styles/headings.css';
import { LoginModule } from './login/login.module';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    BrowserModule,
    HomeModule, /*импортируется первее чем AppRouterModule потому что с Home все начнется*/
    LoginModule,
    AppRouterModule,
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [

  ]
})
export class AppModule {
}