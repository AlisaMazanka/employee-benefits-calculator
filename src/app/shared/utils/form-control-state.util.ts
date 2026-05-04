import { AbstractControl } from '@angular/forms';

export function isControlInvalid(control: AbstractControl | null | undefined): boolean {
  return !!control && control.invalid && (control.touched || control.dirty);
}