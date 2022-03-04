import { AbstractControl, ValidationErrors } from '@angular/forms';

export class FormValidators {
  static canNotContainSpace(control: AbstractControl):ValidationErrors | null {
    if ((control.value as string).indexOf(' ')>=0) {
      return { isContainSpace: true };
    }
    return null;
  }
}
