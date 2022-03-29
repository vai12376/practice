/** @format */

import { Injectable } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { filter, map, of, switchMap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private redirectWhenLogOut = false;
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

  async logOut() {
    if (this.redirectWhenLogOut) {
      await this.router.navigateByUrl("/");
    }
  }
}
