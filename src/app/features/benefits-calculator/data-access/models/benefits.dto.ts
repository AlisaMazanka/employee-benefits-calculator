export interface EmployeeBenefitsDto {
  id: string;
  employee: EmployeeDto;
  compensation: CompensationDto;
  serviceHistory: ServiceHistoryItemDto[];
  calculationSettings: CalculationSettingsDto;
}

export interface EmployeeDto {
  firstName: string;
  lastName: string;
  dateOfBirth: string | null;
  employmentStartDate: string | null;
}

export interface CompensationDto {
  annualSalary: number;
  bonusPercentage: number;
  pensionContributionPercentage: number;
}

export interface ServiceHistoryItemDto {
  id: string;
  startDate: string | null;
  endDate: string | null;
  isCurrent: boolean;
  serviceType: 'full-time' | 'part-time' | 'leave';
}

export interface CalculationSettingsDto {
  mode: 'current' | 'by-age' | 'by-date';
  targetAge: number | null;
  targetDate: string | null;
}
