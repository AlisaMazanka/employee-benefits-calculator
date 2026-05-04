import { Injectable } from '@angular/core';
import { EmployeeBenefitsDto } from '../../data-access/models/benefits.dto';
import { BenefitsCalculationResult } from '../../data-access/models/benefits-calculation-result.model';

@Injectable({
  providedIn: 'root',
})
export class BenefitsCalculationService {
  calculate(dto: EmployeeBenefitsDto): BenefitsCalculationResult {
    const totalServiceYears = dto.serviceHistory.length * 4;
    const eligible = totalServiceYears >= 5;
    const estimatedAnnualBenefit = dto.compensation.annualSalary * (dto.compensation.pensionContributionPercentage / 100);

    return {
      totalServiceYears,
      eligible,
      estimatedAnnualBenefit,
    };
  }
}
