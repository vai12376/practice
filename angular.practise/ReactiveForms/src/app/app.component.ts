/** @format */

import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Utilities } from "./shared/utilities/utilities";
import { CustomValidators } from "./core/validators/customvalidators";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "reactiveforms";
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.initializeForm();
  }

  initializeForm() {
    let form = this.formBuilder.group(
      {
        name: ["", [Validators.required, Validators.maxLength(50)]],
        email: [
          "",
          [Validators.required, Validators.pattern(Utilities.emailRegex)],
        ],
        password: [
          "",
          [Validators.required, Validators.pattern(Utilities.passwordRegex)],
        ],
        confirmPassword: ["", [Validators.required]],
      },
      {
        validators: CustomValidators.mustMatch("password", "confirmPassword"),
      }
    );
    return form;
  }

  get _userForm() {
    return this.userForm.controls;
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    } else {
      console.log("not valid");
    }
  }
}
