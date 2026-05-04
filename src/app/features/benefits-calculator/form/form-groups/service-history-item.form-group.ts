import { FormControl, FormGroup, Validators } from '@angular/forms';
import { endDateAfterStartDateValidator } from '../validators/service-history.validators';

export type ServiceType = 'full-time' | 'part-time' | 'leave';

export interface ServiceHistoryItemFormControls {
  id: FormControl<string>;
  startDate: FormControl<string | null>;
  endDate: FormControl<string | null>;
  isCurrent: FormControl<boolean>;
  serviceType: FormControl<ServiceType>;
}

export class ServiceHistoryItemFormGroup extends FormGroup<ServiceHistoryItemFormControls> {
  static create(): ServiceHistoryItemFormGroup {
    const form = new ServiceHistoryItemFormGroup(
      {
        id: new FormControl(crypto.randomUUID(), { nonNullable: true }),
        startDate: new FormControl<string | null>(null, { validators: [Validators.required] }),
        endDate: new FormControl<string | null>(null),
        isCurrent: new FormControl<boolean>(false, { nonNullable: true }),
        serviceType: new FormControl<ServiceType>('full-time', {
          nonNullable: true,
          validators: [Validators.required],
        }),
      },
      { validators: [endDateAfterStartDateValidator] },
    );

    form.initIsCurrentLogic();

    return form;
  }

  initIsCurrentLogic(): void {
    const isCurrentControl = this.controls.isCurrent;
    const endDateControl = this.controls.endDate;

    if (isCurrentControl.value) {
      endDateControl.disable();
    }

    isCurrentControl.valueChanges.subscribe((isCurrent) => {
      if (isCurrent) {
        endDateControl.setValue(null);
        endDateControl.disable();
      } else {
        endDateControl.enable();
      }
    });
  }

  get isDateRangeInvalid(): boolean {
    return (
      !!this.errors?.['endDateBeforeStartDate'] &&
      (this.controls.startDate.touched ||
        this.controls.endDate.touched ||
        this.controls.startDate.dirty ||
        this.controls.endDate.dirty)
    );
  }
}
