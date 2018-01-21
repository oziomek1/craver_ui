import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyHttpInterceptor } from './my-http-interceptor';

import { AppComponent } from './app.component';
import { Configuration } from './app.constants';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { MessagesService } from './services/messages/messages.service';
import { MessagesDetailsComponent } from './pages/messages-details/messages-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MessagesComponent,
    MessagesDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: MyHttpInterceptor,
    //   multi: true
    // },
    Configuration,
    MessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
