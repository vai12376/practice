/** @format */

import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/shared/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(username: String, password: String) {
    console.log(username, password);
    if (this.authService.isAuthenticated(username, password)) {
      console.log("yes");
    }
  }
}
