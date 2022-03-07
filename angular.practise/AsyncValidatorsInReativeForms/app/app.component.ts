/** @format */

import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { customValidators } from "./common/customValidators";
import { AuthService } from "./services/auth-service.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  form;
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.form = this.fb.group({
      userName: ["", Validators.required, customValidators.shouldBeUnique],
      password: ["", Validators.required],
    });
  }

  login() {
    console.log(this.form.value);
    let isValid = this.authService.authenticate(this.form.value);
    if (isValid) {
      alert("you are logged in");
    } else {
      alert("enter valid details");
    }
  }
  get username() {
    return this.form.get("userName");
  }
}
