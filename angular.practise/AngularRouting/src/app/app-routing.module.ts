/** @format */

import { NgModule } from "@angular/core";
import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { combineLatestInit } from "rxjs/internal/observable/combineLatest";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home/home.component";
import { SidebarComponent } from "./home/home/sidebar/sidebar.component";
import { ViewComponent } from "./home/home/view/view.component";

import { LoginComponent } from "./login/login/login.component";
import { AddComponent } from "./manage/add/add.component";
import { ShowComponent } from "./manage/add/show/show.component";
import { ManageComponent } from "./manage/manage.component";
import { AuthGuardGuard } from "./shared/auth-guard.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent,
  },
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
    data: [
      {
        id: "helo",
        kfjkfjg: 8787,
      },
    ],
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
