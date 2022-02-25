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
  @ViewChild("phno") phno: ElementRef | undefined;
  constructor() {}
  log(data: NgModel) {
    console.log(data);
    console.log(this.comment);
  }
  checkPhone() {
    let ph = this.phno?.nativeElement.value;
    let l = ph.toString().length;
    if (l < 10 || l > 10) {
      return true;
    } else {
      return false;
    }
  }
}
