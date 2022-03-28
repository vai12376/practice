/** @format */

import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "./core/services/auth.service";
import { EmailTaken } from "./core/validators/email-taken";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  alertMsg = "";
  showAlertMsg = false;
  signInForm: FormGroup;

  constructor(
    private fromBuilder: FormBuilder,
    private authService: AuthService,
    private emailTaken: EmailTaken
  ) {
    this.signInForm = this.fromBuilder.group({
      firstName: ["", [Validators.required]],
      age: [null, [Validators.required]],
      email: ["", [Validators.required], [this.emailTaken.validate]],
      password: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {}

  get _signInForm() {
    return this.signInForm.controls;
  }

  async onSignUp() {
    if (this.signInForm.valid) {
      try {
        await this.authService.createUser(this.signInForm.value);
      } catch (e) {
        this.alertMsg = "Invalid Request";
        this.showAlertMsg = true;
        return;
      }

      this.alertMsg = "SignUp Successfully";
      this.showAlertMsg = true;
    }
  }

  async onSignIn() {
    if (this.signInForm.valid) {
      try {
        await this.authService.signInUser(this.signInForm.value);
      } catch (e) {
        this.alertMsg = "Invalid Request";
        this.showAlertMsg = true;
        return;
      }
      this.alertMsg = "SignIn Successfully";
      this.showAlertMsg = true;
    }
  }
}
