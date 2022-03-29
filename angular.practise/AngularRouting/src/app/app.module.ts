/** @format */

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./homecomponent/home/home.component";
import { AboutComponent } from './about/about.component';
import { ManageComponent } from './manage/manage.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, ManageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
