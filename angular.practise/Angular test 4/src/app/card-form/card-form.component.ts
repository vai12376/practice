/** @format */

import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-card-form",
  templateUrl: "./card-form.component.html",
  styleUrls: ["./card-form.component.css"],
})
export class CardFormComponent implements OnInit, OnChanges {
  cardsForm: FormGroup;
  formSubmited = false;
  @Input() editFlag = false;
  @Input() editData = {
    title: "",
    notes: "",
    status: false,
  };
  @Output() onSubmitEvent = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.cardsForm = this.initializeForm();
  }
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    this.cardsForm.patchValue(this.editData);
  }
  onSubmit() {
    this.formSubmited = true;
    if (this.cardsForm.valid) {
      this.onSubmitEvent.emit(this.cardsForm.value);
      this.clearForm();
      this.formSubmited = false;
    }
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
  clearForm() {
    this.cardsForm.reset();
  }
}
