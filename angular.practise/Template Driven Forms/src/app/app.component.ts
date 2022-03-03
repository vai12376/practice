/** @format */

import { Component, ElementRef, ViewChild } from "@angular/core";
import { NgModel } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Test";
  comment = "";
  gamesList = [
    { id: 1, name: "cricket" },
    { id: 2, name: "hockey" },
  ];

  mobileNumberPattern = "[0-9]{10}$";
  emailIdPattern = "[a-z0-9._%+-]+@gmail+.[a-z]{2,3}$";
  @ViewChild("phno") phno: ElementRef | undefined;
  constructor() {}
  log(data: NgModel) {}
}
