import { EmployeeBenefitsDto } from "../models/benefits.dto";

export const MOCK_EMPLOYEE_BENEFITS: EmployeeBenefitsDto = {
  id: 'benefits-001',

  employee: {
    firstName: 'Emma',
    lastName: 'Johnson',
    dateOfBirth: '1988-04-12',
    employmentStartDate: '2016-09-01',
  },

  compensation: {
    annualSalary: 72000,
    bonusPercentage: 10,
    pensionContributionPercentage: 6,
  },

  serviceHistory: [
    {
      id: 'service-001',
      startDate: '2016-09-01',
      endDate: '2019-12-31',
      isCurrent: false,
      serviceType: 'full-time',
    },
    {
      id: 'service-002',
      startDate: '2020-01-01',
      endDate: null,
      isCurrent: true,
      serviceType: 'full-time',
    },
  ],

  calculationSettings: {
    mode: 'current',
    targetAge: null,
    targetDate: null,
  },
};