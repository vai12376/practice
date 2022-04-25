/** @format */

import { NgModule } from "@angular/core";
import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";

import { AddComponent } from "./manage/add/add.component";
import { ShowComponent } from "./manage/add/show/show.component";
import { ManageComponent } from "./manage/manage.component";

const routes: Routes = [
  {
    path: "manage",
    component: ManageComponent,
    children: [
      {
        path: "add",
        component: AddComponent,
      },
      {
        path: "show",
        component: ShowComponent,
      },
    ],
  },
  {
    path: "about",
    component: AboutComponent,
    data: {
      id: "helo",
      kfjkfjg: 8787,
    },
  },
];
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: "enabled",
  anchorScrolling: "enabled",
  scrollOffset: [0, 64],
};
@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
