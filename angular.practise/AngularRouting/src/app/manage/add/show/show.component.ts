/** @format */

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-show",
  templateUrl: "./show.component.html",
  styleUrls: ["./show.component.css"],
})
export class ShowComponent implements OnInit {
  name = "";
  color = "";
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log(params);
      this.name = params["fname"];
      this.color = params["fcolor"];
    });
  }

  ngOnInit(): void {}
}
