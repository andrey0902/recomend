import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule, RequestOptionsArgs, XHRBackend, RequestOptions } from '@angular/http';

import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

import '../styles/styles.scss';
import '../styles/headings.css';
import { LoginModule } from './login/login.module';
import { ProductDetailsModule } from './product-details/product-details.module';
import { SharedModule } from './shared/shared.module';
import { MyAuthService } from './core/my-auth.service';
import { HttpService } from './core/http.service';
import { SessionService } from './core/session.service';

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
    SharedModule,
    HomeModule, /*импортируется первее чем AppRouterModule потому что с Home все начнется*/
    LoginModule,
    ProductDetailsModule,
    AppRouterModule,
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    MyAuthService,
    SessionService,
    {
      provide: Http,
      useClass: HttpService,
      deps: [XHRBackend, RequestOptions, SessionService]
    },
  ]
})
export class AppModule {
}
