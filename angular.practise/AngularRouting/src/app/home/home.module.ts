/** @format */

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { ViewComponent } from "./view/view.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

@NgModule({
  declarations: [HomeComponent, ViewComponent, SidebarComponent],
  imports: [CommonModule, HomeRoutingModule],
  exports: [HomeComponent],
})
export class HomeModule {}
