/** @format */

import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

import { ViewComponent } from "./view/view.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: "images",
        component: SidebarComponent,
        children: [
          {
            path: ":id",
            component: ViewComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
