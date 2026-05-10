import { FormControl, FormGroup, Validators } from '@angular/forms';

export type CalculationMode = 'current' | 'by-age' | 'by-date';

export interface CalculationSettingsFormControls {
  mode: FormControl<CalculationMode>;
  targetAge: FormControl<number | null>;
  targetDate: FormControl<string | null>;
}

export class CalculationSettingsFormGroup extends FormGroup<CalculationSettingsFormControls> {
  static create(): CalculationSettingsFormGroup {
    const form = new CalculationSettingsFormGroup({
      mode: new FormControl<CalculationMode>('current', { nonNullable: true }),
      targetAge: new FormControl<number | null>({ value: null, disabled: true }),
      targetDate: new FormControl<string | null>({ value: null, disabled: true }),
    });

    form.initModeChanges();
    form.syncControlsWithMode();

    return form;
  }

  initModeChanges(): void {
    this.controls.mode.valueChanges.subscribe(() => {
      this.syncControlsWithMode();
    });
  }

  syncControlsWithMode(): void {
    const mode = this.controls.mode.value;

    const targetAge = this.controls.targetAge;
    const targetDate = this.controls.targetDate;

    targetAge.clearValidators();
    targetDate.clearValidators();

    if (mode === 'by-age') {
      targetAge.enable();
      targetAge.setValidators([Validators.required]);

      targetDate.disable();
      targetDate.reset();
    } else if (mode === 'by-date') {
      targetDate.enable();
      targetDate.setValidators([Validators.required]);

      targetAge.disable();
      targetAge.reset();
    } else {
      targetAge.disable();
      targetDate.disable();

      targetAge.reset();
      targetDate.reset();
    }

    targetAge.updateValueAndValidity();
    targetDate.updateValueAndValidity();
  }
}
