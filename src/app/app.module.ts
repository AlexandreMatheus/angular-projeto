import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from './modules/layout/layout.module';
import {OrderListModule} from 'primeng/orderlist';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './services/Authentication.service';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LayoutModule,
    OrderListModule,
    HttpClientModule,
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
