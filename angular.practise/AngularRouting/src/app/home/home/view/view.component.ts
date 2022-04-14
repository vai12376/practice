/** @format */

import { Component, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  NavigationEnd,
  ParamMap,
  Router,
} from "@angular/router";
import { filter, map, of, pluck, switchMap } from "rxjs";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.css"],
})
export class ViewComponent implements OnInit {
  imgUrl: string | undefined = "";
  imgList = new Map([
    ["1", "https://picsum.photos/200/301"],
    ["2", "https://picsum.photos/200/302"],
    ["3", "https://picsum.photos/200/303"],
  ]);

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    console.log("here");
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = params.get("id");
      if (id) {
        this.imgUrl = this.imgList.get(id);
      }
    });
  }

  ngOnInit(): void {}
}
