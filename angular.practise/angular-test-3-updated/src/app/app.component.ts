/** @format */

import { Component, VERSION } from "@angular/core";
import * as packageInfo from "../../package.json";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "ShoppingApp";
  version = packageInfo;
  date = new Date();
}
