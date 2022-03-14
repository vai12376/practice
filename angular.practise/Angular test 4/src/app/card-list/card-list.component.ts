/** @format */

import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-card-list",
  templateUrl: "./card-list.component.html",
  styleUrls: ["./card-list.component.css"],
})
export class CardListComponent implements OnInit {
  @Input() cardsArray: any = [];
  @Output() editCardEvent = new EventEmitter();
  @Output() deleteCardEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
