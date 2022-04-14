/** @format */

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AboutComponent } from "./about/about.component";
import { ManageComponent } from "./manage/manage.component";
import { HomeModule } from "./home/home.module";
import { AddComponent } from "./manage/add/add.component";
import { ShowComponent } from "./manage/add/show/show.component";
import { LoginComponent } from "./login/login/login.component";
import { AngularMyDatePickerModule } from "angular-mydatepicker";
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ManageComponent,
    AddComponent,
    ShowComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AngularMyDatePickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
