import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators {

  static match(control: AbstractControl): ValidationErrors | null {
    let passwordControl = control.get('password');
    let confirmControl = control.get('confirmPassword');

    if (passwordControl.pristine || confirmControl.pristine) {
      return null;
    }

    if (passwordControl.value === confirmControl.value) {
      return null;
    }

    return { 'match': true };
  }
}