/** @format */

export class Utilities {
  static passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  static emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  // /^[a-zA-Z0-9!@#$%^&*]{6,16}$/
}
