import {
  mapBenefitsDtoToFormModel,
  mapBenefitsFormModelToDto,
} from './benefits.mapper';
import { EmployeeBenefitsDto } from './benefits.dto';
import { EmployeeBenefitsFormModel } from './benefits.form-model';

describe('benefits mapper', () => {
  function createDto(): EmployeeBenefitsDto {
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
    };
  }

  function createFormModel(): EmployeeBenefitsFormModel {
    return {
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
  }

  it('should map DTO to form model', () => {
    const dto = createDto();

    const result = mapBenefitsDtoToFormModel(dto);

    expect(result).toEqual(createFormModel());
  });

  it('should map form model to DTO', () => {
    const formModel = createFormModel();

    const result = mapBenefitsFormModelToDto('benefits-001', formModel);

    expect(result).toEqual(createDto());
  });

  it('should map null compensation values to default DTO values', () => {
    const formModel: EmployeeBenefitsFormModel = {
      ...createFormModel(),
      compensation: {
        annualSalary: null,
        bonusPercentage: null,
        pensionContributionPercentage: null,
      },
    };

    const result = mapBenefitsFormModelToDto('benefits-001', formModel);

    expect(result.compensation).toEqual({
      annualSalary: 0,
      bonusPercentage: 0,
      pensionContributionPercentage: 0,
    });
  });
});