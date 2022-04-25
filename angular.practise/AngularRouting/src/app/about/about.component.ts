/** @format */

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((v) => console.log(v));

    this.activatedRoute.data.subscribe((val) => {
      console.log(val);
    });

    this.activatedRoute.fragment.subscribe((val) => {
      console.log(val);
    });
  }

  ngOnInit(): void {}
}
