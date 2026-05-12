import { FormControl, FormGroup } from '@angular/forms';
import { endDateAfterStartDateValidator } from './service-history.validators';

describe('endDateAfterStartDateValidator', () => {
  function createForm(value: {
    startDate: string | null;
    endDate: string | null;
    isCurrent: boolean;
  }): FormGroup {
    return new FormGroup(
      {
        startDate: new FormControl(value.startDate),
        endDate: new FormControl(value.endDate),
        isCurrent: new FormControl(value.isCurrent),
      },
      {
        validators: [endDateAfterStartDateValidator],
      },
    );
  }

  it('should return null when endDate is after startDate', () => {
    const form = createForm({
      startDate: '2025-01-01',
      endDate: '2026-01-01',
      isCurrent: false,
    });

    expect(form.errors).toBeNull();
  });

  it('should return validation error when endDate is before startDate', () => {
    const form = createForm({
      startDate: '2025-01-01',
      endDate: '2024-01-01',
      isCurrent: false,
    });

    expect(form.errors).toEqual({ endDateBeforeStartDate: true });
  });

  it('should return validation error when endDate is equal to startDate', () => {
    const form = createForm({
      startDate: '2025-01-01',
      endDate: '2025-01-01',
      isCurrent: false,
    });

    expect(form.errors).toEqual({
      endDateBeforeStartDate: true,
    });
  });

  it('should return null when isCurrent is true', () => {
    const form = createForm({
      startDate: '2025-01-01',
      endDate: '',
      isCurrent: true,
    });

    expect(form.errors).toBeNull();
  });

  it('should return null when startDate or endDate is missing', () => {
    const form = createForm({
      startDate: '2025-01-01',
      endDate: '',
      isCurrent: false,
    });

    expect(form.errors).toBeNull();
  });
});
