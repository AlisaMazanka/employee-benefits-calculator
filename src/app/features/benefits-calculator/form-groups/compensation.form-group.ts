import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface CompensationFormControls {
  annualSalary: FormControl<number | null>;
  bonusPercentage: FormControl<number | null>;
  pensionContributionPercentage: FormControl<number | null>;
}

export class CompensationFormGroup extends FormGroup<CompensationFormControls> {
  static create(): CompensationFormGroup {
    return new CompensationFormGroup({
      annualSalary: new FormControl<number | null>(null, { validators: [Validators.required, Validators.min(0)] }),
      bonusPercentage: new FormControl<number | null>(null, { validators: [Validators.min(0), Validators.max(100)] }),
      pensionContributionPercentage: new FormControl<number | null>(null, { validators: [Validators.min(0), Validators.max(100)] }),
    });
  }
}
