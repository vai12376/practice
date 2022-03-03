/** @format */

import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "test2";
  showTableData(data: object) {
    console.log(data);
  }
}