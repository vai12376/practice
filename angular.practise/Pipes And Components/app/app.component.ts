/** @format */

import { Component, Pipe, PipeTransform } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "PipesAndDirective";
  price = 200.56732;
  date = new Date();
  value = 100;
  isBlue = false;
  className = "c2";
  colorName = "red";
  contacts = [
    {
      firstName: "mark",
      lastName: "rez",
      age: 17,
    },
    {
      firstName: "john",
      lastName: "apz",
      age: 18,
    },
    {
      firstName: "marry",
      lastName: "daz",
      age: 18,
    },
  ];
}
@Pipe({
  name: "demo",
})
export class DemoPipe implements PipeTransform {
  transform(n: number, extention: string) {
    return n + extention;
  }
}
