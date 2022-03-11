/** @format */

import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  notesForm: FormGroup;
  notesStorage: any = [];
  constructor(private fb: FormBuilder) {
    this.notesForm = this.initializeForm();
  }
  ngOnInit(): void {
    this.initializeCard();
  }
  initializeForm() {
    let form = this.fb.group({
      title: ["", [Validators.required, Validators.maxLength(100)]],
      notes: ["", [Validators.required, Validators.maxLength(1000)]],
      status: [],
    });
    return form;
  }
  get _notesForm() {
    return this.notesForm.controls;
  }
  onSubmit() {
    if (this.notesForm.valid) {
      console.log(this.notesForm.value);
      this.notesStorage.push(this.notesForm.value);
      localStorage.setItem("cards", this.notesStorage);
    }
  }
  initializeCard() {
    let cards = localStorage.getItem("cards");
    console.log(cards);
  }
}
