/** @format */

import { Injectable } from "@angular/core";
import { IUserData } from "../common/interfaces";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor() {}
  authenticate(user: IUserData): boolean {
    let users = this.userData;
    for (let i = 0; i < 3; i++) {
      if (
        users[i].userName == user.userName &&
        users[i].password == user.password
      ) {
        return true;
      }
    }
    return false;
  }
  get userData() {
    return [
      { userName: "vaibhavi", password: "123" },
      { userName: "yuvi", password: "abc" },
      { userName: "mosh", password: "xyz" },
    ];
  }
}
