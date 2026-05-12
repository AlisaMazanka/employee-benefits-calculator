import { TestBed } from '@angular/core/testing';
import { BenefitsCalculationService } from './benefits-calculation.service';
import { EmployeeBenefitsDto } from '../../data-access/models/benefits.dto';

describe('BenefitsCalculationService', () => {
  let service: BenefitsCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BenefitsCalculationService);
  });

  function createDto(overrides?: Partial<EmployeeBenefitsDto>): EmployeeBenefitsDto {
    return {
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
      ...overrides,
    };
  }

  it('should calculate total service years', () => {
    const result = service.calculate(createDto());

    expect(result.totalServiceYears).toBe(8);
  });

  it('should return eligible when total service is at least 5 years', () => {
    const result = service.calculate(createDto());

    expect(result.eligible).toBeTruthy();
  });

  it('should return not eligible when total service is less than 5 years', () => {
    const dto = createDto({
      serviceHistory: [
        {
          id: 'service-001',
          startDate: '2020-01-01',
          endDate: null,
          isCurrent: true,
          serviceType: 'full-time',
        },
      ],
    });

    const result = service.calculate(dto);

    expect(result.eligible).toBeFalsy();
  });

  it('should calculate estimated annual benefit', () => {
    const result = service.calculate(createDto());

    expect(result.estimatedAnnualBenefit).toBe(4320);
  });

  it('should return zero service years for empty service history', () => {
    const dto = createDto({
      serviceHistory: [],
    });

    const result = service.calculate(dto);

    expect(result.totalServiceYears).toBe(0);
    expect(result.eligible).toBeFalsy();
  });
});
