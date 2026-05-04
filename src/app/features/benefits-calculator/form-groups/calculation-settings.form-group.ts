import { FormControl, FormGroup, Validators } from '@angular/forms';

export type CalculationMode = 'current' | 'by-age' | 'by-date';

export interface CalculationSettingsFormControls {
  mode: FormControl<CalculationMode>;
  targetAge: FormControl<number | null>;
  targetDate: FormControl<Date | null>;
}

export class CalculationSettingsFormGroup extends FormGroup<CalculationSettingsFormControls> {
  static create(): CalculationSettingsFormGroup {
    const form = new CalculationSettingsFormGroup({
      mode: new FormControl<CalculationMode>('current', { nonNullable: true }),
      targetAge: new FormControl<number | null>({ value: null, disabled: true }),
      targetDate: new FormControl<Date | null>({ value: null, disabled: true }),
    });

    form.syncControlsWithMode();

    return form;
  }

  syncControlsWithMode(): void {
    const mode = this.controls.mode.value;

    if (mode === 'by-age') {
      this.controls.targetAge.enable();
      this.controls.targetAge.setValidators([Validators.required]);
      this.controls.targetDate.disable();
      this.controls.targetDate.clearValidators();
      this.controls.targetDate.setValue(null);
    }

    if (mode === 'by-date') {
      this.controls.targetDate.enable();
      this.controls.targetDate.setValidators([Validators.required]);
      this.controls.targetAge.disable();
      this.controls.targetAge.clearValidators();
      this.controls.targetAge.setValue(null);
    }

    if (mode === 'current') {
      this.controls.targetAge.disable();
      this.controls.targetAge.clearValidators();
      this.controls.targetAge.setValue(null);
      this.controls.targetDate.disable();
      this.controls.targetDate.clearValidators();
      this.controls.targetDate.setValue(null);
    }

    this.controls.targetAge.updateValueAndValidity();
    this.controls.targetDate.updateValueAndValidity();
  }
}
