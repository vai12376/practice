/** @format */

import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SidebarComponent } from "./home/sidebar/sidebar.component";

import { ViewComponent } from "./home/view/view.component";

const routes: Routes = [
  {
    path: "home/images",
    component: SidebarComponent,
    children: [
      {
        path: ":id",
        component: ViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
