import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./shared/components/header/header.component";
import { AppRoutingModule } from './app-routing.module';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {ProductComponent} from "./pages/product/product.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
