import { Component, inject, OnInit, signal } from '@angular/core';
import { BenefitsApiService } from '../../data-access/services/benefits-api';
import { BenefitsCalculatorFormGroup } from '../../form-groups/benefits-calculator.form-group';
import { mapBenefitsDtoToFormModel } from '../../data-access/models/benefits.mapper';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-benefits-calculator-page',
  imports: [JsonPipe],
  templateUrl: './benefits-calculator-page.html',
  styleUrl: './benefits-calculator-page.scss',
})
export class BenefitsCalculatorPage implements OnInit {
  private readonly benefitsApiService = inject(BenefitsApiService);

  form = BenefitsCalculatorFormGroup.create();
  formValue = signal(this.form.getRawValue());

  ngOnInit(): void {
    this.load();
  }

  private load(): void {
    this.benefitsApiService.getBenefits('benefits-001').subscribe((dto) => {
      const formModel = mapBenefitsDtoToFormModel(dto);

      this.form.patchFormModel(formModel);
      this.formValue.set(this.form.getRawValue());
    });
  }
}
