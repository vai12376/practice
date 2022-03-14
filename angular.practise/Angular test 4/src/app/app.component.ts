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
  @ViewChild("addBtn")
  addBtn!: ElementRef;
  cardsForm: FormGroup;
  cardsArray: any = [];
  editId = "";
  editFlag = false;
  formSubmited = false;

  constructor(private fb: FormBuilder) {
    this.cardsForm = this.initializeForm();
  }

  ngOnInit(): void {
    this.getCards();
  }

  initializeForm() {
    let form = this.fb.group({
      title: ["", [Validators.required, Validators.maxLength(100)]],
      notes: ["", [Validators.required, Validators.maxLength(1000)]],
      status: [false],
    });
    return form;
  }

  get _cardsForm() {
    return this.cardsForm.controls;
  }

  onSubmit() {
    this.formSubmited = true;
    if (this.cardsForm.valid) {
      if (this.editFlag) {
        let card = {
          id: this.editId,
          title: this._cardsForm["title"].value,
          notes: this._cardsForm["notes"].value,
          status: this._cardsForm["status"].value,
          updatedAt: new Date(),
        };
        let index = this.cardsArray.findIndex(
          (e: ICard) => e.id === this.editId
        );
        this.cardsArray[index] = card;
        this.clearForm();
        this.formSubmited = false;
        this.setCards();
        this.addBtn.nativeElement.innerHTML = "add card";
        this.editFlag = false;
      } else {
        let card = {
          id: UUID.UUID(),
          title: this._cardsForm["title"].value,
          notes: this._cardsForm["notes"].value,
          status: this._cardsForm["status"].value,
          updatedAt: new Date(),
        };
        const cards = localStorage.getItem("cards");
        if (cards) {
          this.cardsArray = JSON.parse(cards);
          this.cardsArray.push(card);
          this.clearForm();
          this.formSubmited = false;
          this.setCards();
        } else {
          this.cardsArray.push(card);
          this.clearForm();
          this.formSubmited = false;
          this.setCards();
        }
      }
    }
  }

  clearForm() {
    this.cardsForm.reset();
  }
  //set array into localstorage
  setCards() {
    this.cardsArray = this.cardsArray.sort(
      (noteA: any, noteB: any) =>
        new Date(noteB.updatedAt).getTime() -
        new Date(noteA.updatedAt).getTime()
    );

    localStorage.setItem("cards", JSON.stringify(this.cardsArray));
  }
  //get into array from localstorage
  getCards() {
    let cards = localStorage.getItem("cards");
    if (cards) {
      this.cardsArray = JSON.parse(cards);
    }
  }

  editCard(id: string) {
    let index = this.cardsArray.findIndex((e: ICard) => e.id === id);

    this.getCards();
    let patch = {
      title: this.cardsArray[index].title,
      notes: this.cardsArray[index].notes,
      status: this.cardsArray[index].status,
    };
    this.cardsForm.patchValue(patch);
    if (this.addBtn) {
      console.log("here");
      this.addBtn.nativeElement.innerHTML = "update card";
    }

    this.editFlag = true;
    this.editId = id;
  }
  deleteCard(id: string) {
    let index = this.cardsArray.findIndex((e: ICard) => e.id === id);

    this.cardsArray.splice(index, 1);

    this.setCards();
  }
}
