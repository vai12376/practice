/** @format */

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-student-main",
  templateUrl: "./student-main.component.html",
  styleUrls: ["./student-main.component.css"],
})
export class StudentMainComponent implements OnInit {
  sendData = {
    firstName: "",
    lastName: "",
    gender: "",
    instName: "",
    city: "",
    description: "",
  };
  constructor() {}

  ngOnInit(): void {}
  showData() {}
  ListToMain(data: any) {
    console.log("in main", data);
    this.sendData = data;
  }
}
