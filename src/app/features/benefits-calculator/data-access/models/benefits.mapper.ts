import { EmployeeBenefitsDto } from './benefits.dto';
import { EmployeeBenefitsFormModel } from './benefits.form-model';

export function mapBenefitsDtoToFormModel(dto: EmployeeBenefitsDto): EmployeeBenefitsFormModel {
  return {
    employee: {
      firstName: dto.employee.firstName,
      lastName: dto.employee.lastName,
      dateOfBirth: dto.employee.dateOfBirth,
      employmentStartDate: dto.employee.employmentStartDate,
    },
    compensation: {
      annualSalary: dto.compensation.annualSalary,
      bonusPercentage: dto.compensation.bonusPercentage,
      pensionContributionPercentage: dto.compensation.pensionContributionPercentage,
    },
    serviceHistory: dto.serviceHistory.map((item) => ({
      id: item.id,
      startDate: item.startDate,
      endDate: item.endDate,
      isCurrent: item.isCurrent,
      serviceType: item.serviceType,
    })),
    calculationSettings: {
      mode: dto.calculationSettings.mode,
      targetAge: dto.calculationSettings.targetAge,
      targetDate: dto.calculationSettings.targetDate,
    },
  };
}

export function mapBenefitsFormModelToDto(id: string, form: EmployeeBenefitsFormModel): EmployeeBenefitsDto {
    return {
        id,
        employee: {
            firstName: form.employee.firstName,
            lastName: form.employee.firstName,
            dateOfBirth: form.employee.dateOfBirth,
            employmentStartDate: form.employee.employmentStartDate
        },
        compensation: {
            annualSalary: form.compensation.annualSalary ?? 0,
            bonusPercentage: form.compensation.bonusPercentage ?? 0,
            pensionContributionPercentage: form.compensation.pensionContributionPercentage  ?? 0
        },
        serviceHistory: form.serviceHistory.map((item) => ({
            id: item.id,
            startDate: item.startDate,
            endDate: item.endDate,
            isCurrent: item.isCurrent,
            serviceType: item.serviceType
        })

        ),
        calculationSettings: {
            mode: form.calculationSettings.mode,
            targetAge: form.calculationSettings.targetAge,
            targetDate: form.calculationSettings.targetDate,
        }
    }
}
