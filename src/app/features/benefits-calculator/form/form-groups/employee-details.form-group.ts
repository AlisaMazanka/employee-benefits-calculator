import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface EmployeeDetailsFormControls {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  dateOfBirth: FormControl<string | null>;
  employmentStartDate: FormControl<string | null>;
}

export class EmployeeDetailsFormGroup extends FormGroup<EmployeeDetailsFormControls> {
  static create(): EmployeeDetailsFormGroup {
    return new EmployeeDetailsFormGroup({
      firstName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      lastName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      dateOfBirth: new FormControl<string| null>(null, { validators: [Validators.required] }),
      employmentStartDate: new FormControl<string | null>(null, { validators: [Validators.required] }),
    });
  }
}
