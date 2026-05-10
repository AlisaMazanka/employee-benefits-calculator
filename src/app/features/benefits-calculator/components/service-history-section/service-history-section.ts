import { Component, input, output } from '@angular/core';
import { isControlInvalid } from '../../../../shared/utils/form-control-state.util';
import { BenefitsCalculatorFormGroup } from '../../form/form-groups/benefits-calculator.form-group';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-service-history-section',
  imports: [ReactiveFormsModule],
  templateUrl: './service-history-section.html',
  styleUrl: './service-history-section.scss',
})
export class ServiceHistorySection {
  readonly form = input.required<BenefitsCalculatorFormGroup>();
  readonly addService = output<void>();
  readonly removeService = output<number>();
  protected readonly isControlInvalid = isControlInvalid;

  get formGroup(): FormGroup {
    return this.form() as unknown as FormGroup;
  }
}
