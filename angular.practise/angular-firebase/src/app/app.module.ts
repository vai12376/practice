/** @format */

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from "src/environments/environment";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
