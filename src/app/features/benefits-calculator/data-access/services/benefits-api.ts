import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EmployeeBenefitsDto } from '../models/benefits.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BenefitsApiService {
  private readonly http = inject(HttpClient);

  getBenefits(id: string): Observable<EmployeeBenefitsDto> {
    return this.http.get<EmployeeBenefitsDto>(`/api/benefits/${id}`);

  }

  saveBenefits(dto: EmployeeBenefitsDto): Observable<EmployeeBenefitsDto> {
    return this.http.put<EmployeeBenefitsDto>(`/api/benefits/${dto.id}`, dto);
  }

  calculateBenefits(dto: EmployeeBenefitsDto): Observable<EmployeeBenefitsDto> {
    return this.http.post<EmployeeBenefitsDto>(`/api/calculate`, dto);
  }
}
