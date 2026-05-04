import { FormControl, FormGroup, Validators } from '@angular/forms';

export type ServiceType = 'full-time' | 'part-time' | 'leave';

export interface ServiceHistoryItemFormControls {
  id: FormControl<string>;
  startDate: FormControl<Date | null>;
  endDate: FormControl<Date | null>;
  isCurrent: FormControl<boolean>;
  serviceType: FormControl<ServiceType>;
}

export class ServiceHistoryItemFormGroup extends FormGroup<ServiceHistoryItemFormControls> {
  static create(): ServiceHistoryItemFormGroup {
    return new ServiceHistoryItemFormGroup({
      id: new FormControl(crypto.randomUUID(), { nonNullable: true }),
      startDate: new FormControl<Date | null>(null, { validators: [Validators.required] }),
      endDate: new FormControl<Date | null>(null),
      isCurrent: new FormControl<boolean>(false, { nonNullable: true }),
      serviceType: new FormControl<ServiceType>('full-time', { nonNullable: true, validators: [Validators.required]}),
    });
  }
}
