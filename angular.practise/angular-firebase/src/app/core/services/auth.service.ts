/** @format */

import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/compat/firestore";
import { IUser } from "../models/interfaces";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  private usersCollection: AngularFirestoreCollection<IUser>;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore
  ) {
    this.usersCollection = this.angularFirestore.collection("users");
  }

  async createUser(userData: IUser) {
    if (!userData.password) {
      throw Error("not a valid password");
    }

    const userCred = await this.angularFireAuth.createUserWithEmailAndPassword(
      userData.email,
      userData.password
    );
    if (!userCred.user) {
      throw new Error("user not found");
    }
    this.usersCollection.doc(userCred.user.uid).set({
      firstName: userData.firstName,
      email: userData.email,
      age: userData.age,
    });
  }

  async signInUser(userData: IUser) {
    if (!userData.password) {
      throw new Error("not a valid password");
    }

    const userCred = await this.angularFireAuth.signInWithEmailAndPassword(
      userData.email,
      userData.password
    );
  }
}
