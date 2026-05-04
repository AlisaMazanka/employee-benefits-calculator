import { AbstractControl, ValidationErrors } from "@angular/forms";

export function endDateAfterStartDateValidator(control: AbstractControl): ValidationErrors | null {
  const startDate = control.get('startDate')?.value;
  const endDate = control.get('endDate')?.value;
  const isCurrent = control.get('isCurrent')?.value;

  if (!startDate || !endDate || isCurrent) {
    return null;
  }

  if (new Date(endDate) <= new Date(startDate)) {
    return { endDateBeforeStartDate: true };
  }

  return null;
}
