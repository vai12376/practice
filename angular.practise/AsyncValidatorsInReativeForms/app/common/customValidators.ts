/** @format */

import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class customValidators {
  static shouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "vaibhavi") {
          resolve({ shouldBeUnique: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
