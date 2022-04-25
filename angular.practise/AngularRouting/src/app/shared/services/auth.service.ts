/** @format */

import { Injectable } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { filter, map, of, switchMap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {



  private redirectWhenLogOut = false;
  imgUrl = "";
  isLogedIn = false;


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        map((event) => this.activatedRoute.firstChild),
        switchMap((route) => route?.data ?? of({}))
      )
      .subscribe((data) => {
        this.redirectWhenLogOut = data["authonly"] ?? false;
      });
  }




  isAuthenticated(username: String, password: String): boolean {
    if (username === "admin" && password === "admin@123") {
      this.isLogedIn = true;
      return true;
    } else {
      this.isLogedIn = false;
      return false;
    }
  }




  async logOut() {
    if (this.redirectWhenLogOut) {
      await this.router.navigateByUrl("/");
    }
  }
}
