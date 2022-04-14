/** @format */

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home/home.component";
import { ViewComponent } from "./home/view/view.component";
import { SidebarComponent } from "./home/sidebar/sidebar.component";

@NgModule({
  declarations: [HomeComponent, ViewComponent, SidebarComponent],
  imports: [CommonModule, HomeRoutingModule],
  exports: [HomeComponent],
})
export class HomeModule {}
