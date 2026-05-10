import { DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { BenefitsCalculationResult } from '../data-access/models/benefits-calculation-result.model';

@Component({
  selector: 'app-calculation-summary',
  imports: [DecimalPipe],
  templateUrl: './calculation-summary.html',
  styleUrl: './calculation-summary.scss',
})
export class CalculationSummary {
  readonly result = input<BenefitsCalculationResult | null>(null);
}
