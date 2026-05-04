export interface EmployeeBenefitsFormModel {
  employee: {
    firstName: string;
    lastName: string;
    dateOfBirth: Date | null;
    employmentStartDate: Date | null;
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
    targetDate: Date | null;
  };
}

export interface ServiceHistoryFormModel {
  id: string;
  startDate: Date | null;
  endDate: Date | null;
  isCurrent: boolean;
  serviceType: 'full-time' | 'part-time' | 'leave';
}