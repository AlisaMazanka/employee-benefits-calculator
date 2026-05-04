import { Injectable } from "@angular/core";
import { BenefitsCalculatorFormGroup } from "../form-groups/benefits-calculator.form-group";
import { EmployeeBenefitsDto } from "../../data-access/models/benefits.dto";
import { mapBenefitsDtoToFormModel, mapBenefitsFormModelToDto } from "../../data-access/models/benefits.mapper";

@Injectable({ providedIn: 'root' })
export class BenefitsFormService {
    createForm(): BenefitsCalculatorFormGroup {
        return BenefitsCalculatorFormGroup.create();
    }

    patchForm(form: BenefitsCalculatorFormGroup, dto: EmployeeBenefitsDto): void {
        const formModel = mapBenefitsDtoToFormModel(dto);
        form.patchFormModel(formModel);
    }

    mapToDto(form: BenefitsCalculatorFormGroup, id: string): EmployeeBenefitsDto {
        const formValue = form.getRawValue();
        return mapBenefitsFormModelToDto(id, formValue);
    }
}