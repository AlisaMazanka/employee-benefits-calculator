export interface EmployeeBenefitsFormModel {
  employee: {
    firstName: string;
    lastName: string;
    dateOfBirth: string | null;
    employmentStartDate: string | null;
  };

  compensation: {
    annualSalary: number | null;
    bonusPercentage: number | null;
    pensionContributionPercentage: number | null;
  };

  serviceHistory: ServiceHistoryFormModel[];

  calculationSettings: {
    mode: 'current' | 'by-age' | 'by-date';
    targetAge: number | null;
    targetDate: string | null;
  };
}

export interface ServiceHistoryFormModel {
  id: string;
  startDate: string | null;
  endDate: string | null;
  isCurrent: boolean;
  serviceType: 'full-time' | 'part-time' | 'leave';
}