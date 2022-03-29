/** @format */

import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./shared/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "angularRouting";
  constructor(private auth: AuthService) {}
  async onLogOut() {
    this.auth.logOut();
  }
}
