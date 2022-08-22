import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesComponent } from './sales/sales.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { LogService } from './log.service';
import { UpdatedLogService } from './updated-log.service';
import { Child3Component } from './child3/child3.component';
import { GlobalErrorHandlerService } from './global-error-handler.service';



@NgModule({
  declarations: [
    AppComponent,
    SalesComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    Child1Component,
    Child2Component,
    Child3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // {provide:LogService,useFactory:getLog},
    {provide:UpdatedLogService,useExisting:LogService},
    {provide:ErrorHandler,useClass:GlobalErrorHandlerService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
