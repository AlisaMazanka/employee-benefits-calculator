import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface EmployeeDetailsFormControls {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  dateOfBirth: FormControl<Date | null>;
  employmentStartDate: FormControl<Date | null>;
}

export class EmployeeDetailsFormGroup extends FormGroup<EmployeeDetailsFormControls> {
  static create(): EmployeeDetailsFormGroup {
    return new EmployeeDetailsFormGroup({
      firstName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      lastName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      dateOfBirth: new FormControl<Date | null>(null, { validators: [Validators.required] }),
      employmentStartDate: new FormControl<Date | null>(null, { validators: [Validators.required] }),
    });
  }
}
