/** @format */

import { AbstractControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";
export class CustomValidators {
  static mustMatch(psw: string, cpsw: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[psw];
      const matchcontrol = formGroup.controls[cpsw];
      console.log(matchcontrol);
      if (matchcontrol.errors && !matchcontrol.errors?.["mustMatch"]) {
        return;
      }

      if (control.value !== matchcontrol.value) {
        matchcontrol.setErrors({ mustMatch: true });
      } else {
        matchcontrol.setErrors(null);
      }
    };
  }
}
