import { AbstractControl } from '@angular/forms';

export function ValidateConfirmPassword(control: AbstractControl) {
  if (!control.root.value) {
    return null;
  }
  console.log(control.root.value);
  if (control.value === control.root.value.password) {
    return null;
  } else {
    return { validConfirmPassword: true };
  }
}