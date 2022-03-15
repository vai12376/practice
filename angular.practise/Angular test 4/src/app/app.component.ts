/** @format */

import { createDirectiveType } from "@angular/compiler/src/render3/view/compiler";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UUID } from "angular2-uuid";
import { ICard } from "./common/interfaces";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  cardsArray: any = [];
  editId = "";
  editFlag = false;
  editData = {
    title: "",
    notes: "",
    status: false,
  };

  ngOnInit(): void {
    this.getCards();
  }

  addCard(cardData: any) {
    if (this.editFlag) {
      let index = this.cardsArray.findIndex((e: ICard) => e.id === this.editId);

      if (index !== -1) {
        let card: ICard = {
          id: this.editId,
          title: cardData.title,
          notes: cardData.notes,
          status: cardData.status,
          updatedAt: new Date(),
        };

        this.cardsArray[index] = card;
        this.setCards();
      } else {
        alert("card not found");
      }

      this.editData = {
        title: "",
        notes: "",
        status: false,
      };
      this.editFlag = false;
    } else {
      let card: ICard = {
        id: UUID.UUID(),
        title: cardData.title,
        notes: cardData.notes,
        status: cardData.status,
        updatedAt: new Date(),
      };
      const cards = localStorage.getItem("cards");
      if (cards) {
        this.cardsArray = JSON.parse(cards);
        this.cardsArray.push(card);
        this.setCards();
      } else {
        this.cardsArray.push(card);
        this.setCards();
      }
    }
  }

  //set array into localstorage
  setCards() {
    if (this.cardsArray) {
      this.cardsArray = this.cardsArray.sort(
        (noteA: any, noteB: any) =>
          new Date(noteB.updatedAt).getTime() -
          new Date(noteA.updatedAt).getTime()
      );

      localStorage.setItem("cards", JSON.stringify(this.cardsArray));
    }
  }
  //get into array from localstorage
  getCards() {
    let cards = localStorage.getItem("cards");
    if (cards) {
      this.cardsArray = JSON.parse(cards);
    }
  }

  editCard(id: string) {
    //this.getCards();
    let index = this.cardsArray.findIndex((e: ICard) => e.id === id);
    if (index !== -1) {
      let patch = {
        title: this.cardsArray[index].title,
        notes: this.cardsArray[index].notes,
        status: this.cardsArray[index].status,
      };

      this.editData = patch;
      this.editFlag = true;
      this.editId = id;
    } else {
      alert("card not found");
    }
  }
  deleteCard(id: string) {
    let index = this.cardsArray.findIndex((e: ICard) => e.id === id);
    if (index !== -1) {
      this.cardsArray.splice(index, 1);
      this.setCards();
    } else {
      alert("card not found");
    }
  }
}
