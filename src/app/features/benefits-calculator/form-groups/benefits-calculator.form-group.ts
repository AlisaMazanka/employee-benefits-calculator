import { FormArray, FormGroup } from '@angular/forms';
import { CompensationFormGroup } from './compensation.form-group';
import { EmployeeDetailsFormGroup } from './employee-details.form-group';
import { ServiceHistoryItemFormGroup } from './service-history-item.form-group';
import { CalculationSettingsFormGroup } from './calculation-settings.form-group';
import { EmployeeBenefitsFormModel } from '../data-access/models/benefits.form-model';

export interface BenefitsCalculatorFormControls {
  employee: EmployeeDetailsFormGroup;
  compensation: CompensationFormGroup;
  serviceHistory: FormArray<ServiceHistoryItemFormGroup>;
  calculationSettings: CalculationSettingsFormGroup;
}

export class BenefitsCalculatorFormGroup extends FormGroup<BenefitsCalculatorFormControls> {
  static create(): BenefitsCalculatorFormGroup {
    return new BenefitsCalculatorFormGroup({
      employee: EmployeeDetailsFormGroup.create(),
      compensation: CompensationFormGroup.create(),
      serviceHistory: new FormArray<ServiceHistoryItemFormGroup>([
        ServiceHistoryItemFormGroup.create(),
      ]),
      calculationSettings: CalculationSettingsFormGroup.create(),
    });
  }

  get serviceHistoryArray(): FormArray<ServiceHistoryItemFormGroup> {
    return this.controls.serviceHistory;
  }

  addServiceHistoryItem(): void {
    this.serviceHistoryArray.push(ServiceHistoryItemFormGroup.create());
  }

  removeServiceHistoryItem(index: number): void {
    this.serviceHistoryArray.removeAt(index);
  }

  patchFormModel(formModel: EmployeeBenefitsFormModel): void {
    this.controls.employee.patchValue(formModel.employee);
    this.controls.compensation.patchValue(formModel.compensation);
    this.controls.calculationSettings.patchValue(formModel.calculationSettings);
    this.serviceHistoryArray.clear();

    formModel.serviceHistory.forEach((item) => {
      const group = ServiceHistoryItemFormGroup.create();
      group.patchValue(item);
      this.serviceHistoryArray.push(group);
    });
  }
}
