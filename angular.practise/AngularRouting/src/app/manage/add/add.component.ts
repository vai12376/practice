/** @format */

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"],
})
export class AddComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(name: string, color: string) {
    this.router.navigate(["manage", "show", { id: 5 }], {
      queryParams: { fname: name, fcolor: color },
    });
    // this.router.navigateByUrl(`manage/add/show?name=${name}&color=${color}`);
  }
}
