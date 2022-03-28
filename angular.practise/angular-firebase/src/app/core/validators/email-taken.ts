/** @format */

import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Injectable } from "@angular/core";
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
  Validators,
} from "@angular/forms";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EmailTaken implements AsyncValidator {
  constructor(private angularFireAuth: AngularFireAuth) {}
  validate = (control: AbstractControl): Promise<ValidationErrors | null> => {
    return this.angularFireAuth
      .fetchSignInMethodsForEmail(control.value)
      .then((res) => {
        return res.length ? { emailTaken: true } : null;
      });
  };
}
