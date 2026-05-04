import { Component, inject, OnInit } from '@angular/core';
import { BenefitsApiService } from '../../data-access/services/benefits-api';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { isControlInvalid } from '../../../../shared/utils/form-control-state.util';
import { BenefitsFormFacade } from '../../form/facade/benefits-form.facade';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-benefits-calculator-page',
  imports: [ReactiveFormsModule, DecimalPipe],
  templateUrl: './benefits-calculator-page.html',
  styleUrl: './benefits-calculator-page.scss',
})
export class BenefitsCalculatorPage implements OnInit {
  private readonly benefitsApiService = inject(BenefitsApiService);
  private readonly facade = inject(BenefitsFormFacade);

  form = this.facade.form;

  loading = this.facade.loading;
  saving = this.facade.saving;
  calculating = this.facade.calculating;
  saved = this.facade.saved;
  error = this.facade.error;
  calculationResult = this.facade.calculationResult;

  protected readonly isControlInvalid = isControlInvalid;

  ngOnInit(): void {
    this.facade.load();
  }

  onSave(): void {
    this.facade.save();
  }

  onCalculate(): void {
    this.facade.calculate();
  }

  get formGroup(): FormGroup {
    return this.form as unknown as FormGroup;
  }

  addServiceHistoryItem(): void {
    this.form.addServiceHistoryItem();
  }

  removeServiceHistoryItem(index: number): void {
    this.form.removeServiceHistoryItem(index);
  }
}
