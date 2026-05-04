import { inject, Injectable, signal } from '@angular/core';
import { BenefitsApiService } from '../../data-access/services/benefits-api';
import { BenefitsFormService } from '../services/benefits-form.service';
import { BenefitsCalculationResult } from '../../data-access/models/benefits-calculation-result.model';
import { BenefitsCalculationService } from '../../domain/services/benefits-calculation.service';

@Injectable({ providedIn: 'root' })
export class BenefitsFormFacade {
  readonly benefitsApiService = inject(BenefitsApiService);
  readonly benefitsFormService = inject(BenefitsFormService);
  private readonly calculationService = inject(BenefitsCalculationService);

  readonly form = this.benefitsFormService.createForm();

  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly calculating = signal(false);
  readonly saved = signal(false);
  readonly error = signal<string | null>(null);

  readonly calculationResult = signal<BenefitsCalculationResult | null>(null);

  private readonly id = 'benefits-001';

  load(): void {
    this.loading.set(true);
    this.error.set(null);

    this.benefitsApiService.getBenefits(this.id).subscribe({
      next: (dto) => {
        this.benefitsFormService.patchForm(this.form, dto);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load benefits data.');
        this.loading.set(false);
      },
    });
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.saving.set(true);
    this.saved.set(false);
    this.error.set(null);

    const dto = this.benefitsFormService.mapToDto(this.form, this.id);

    this.benefitsApiService.saveBenefits(dto).subscribe({
      next: () => {
        this.saving.set(false);
        this.saved.set(true);
      },
      error: () => {
        this.saving.set(false);
        this.error.set('Failed to save benefits data.');
      },
    });
  }

  calculate(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.calculating.set(true);
    this.error.set(null);

    const dto = this.benefitsFormService.mapToDto(this.form, this.id);

    this.benefitsApiService.calculateBenefits(dto).subscribe({
      next: (response) => {
        this.calculationResult.set(this.calculationService.calculate(response));
        this.calculating.set(false);
      },
      error: () => {
        this.calculating.set(false);
        this.error.set('Failed to calculate benefits.');
      },
    });
  }
}
