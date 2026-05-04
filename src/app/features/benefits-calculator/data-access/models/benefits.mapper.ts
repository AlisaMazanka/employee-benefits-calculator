import { EmployeeBenefitsDto } from './benefits.dto';
import { EmployeeBenefitsFormModel } from './benefits.form-model';

export function mapBenefitsDtoToFormModel(dto: EmployeeBenefitsDto): EmployeeBenefitsFormModel {
  return {
    employee: {
      firstName: dto.employee.firstName,
      lastName: dto.employee.lastName,
      dateOfBirth: toDate(dto.employee.dateOfBirth),
      employmentStartDate: toDate(dto.employee.employmentStartDate),
    },
    compensation: {
      annualSalary: dto.compensation.annualSalary,
      bonusPercentage: dto.compensation.bonusPercentage,
      pensionContributionPercentage: dto.compensation.pensionContributionPercentage,
    },
    serviceHistory: dto.serviceHistory.map((item) => ({
      id: item.id,
      startDate: toDate(item.startDate),
      endDate: toDate(item.endDate),
      isCurrent: item.isCurrent,
      serviceType: item.serviceType,
    })),
    calculationSettings: {
      mode: dto.calculationSettings.mode,
      targetAge: dto.calculationSettings.targetAge,
      targetDate: toDate(dto.calculationSettings.targetDate),
    },
  };
}

export function mapBenefitsFormModelToDto(id: string, form: EmployeeBenefitsFormModel): EmployeeBenefitsDto {
    return {
        id,
        employee: {
            firstName: form.employee.firstName,
            lastName: form.employee.firstName,
            dateOfBirth: toIsoDate(form.employee.dateOfBirth),
            employmentStartDate: toIsoDate(form.employee.employmentStartDate)
        },
        compensation: {
            annualSalary: form.compensation.annualSalary ?? 0,
            bonusPercentage: form.compensation.bonusPercentage ?? 0,
            pensionContributionPercentage: form.compensation.pensionContributionPercentage  ?? 0
        },
        serviceHistory: form.serviceHistory.map((item) => ({
            id: item.id,
            startDate: toIsoDate(item.startDate),
            endDate: item.endDate ? toIsoDate(item.endDate) : null,
            isCurrent: item.isCurrent,
            serviceType: item.serviceType
        })

        ),
        calculationSettings: {
            mode: form.calculationSettings.mode,
            targetAge: form.calculationSettings.targetAge,
            targetDate: form.calculationSettings.targetDate ? toIsoDate(form.calculationSettings.targetDate) : null,
        }
    }
}

function toDate(value: string | null): Date | null {
  return value ? new Date(value) : null;
}

function toIsoDate(value: Date | null): string {
  return value ? value.toISOString().slice(0, 10) : '';
}
