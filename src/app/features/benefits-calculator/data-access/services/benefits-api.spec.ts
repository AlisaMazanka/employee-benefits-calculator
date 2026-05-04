import { TestBed } from '@angular/core/testing';

import { BenefitsApi } from './benefits-api';

describe('BenefitsApi', () => {
  let service: BenefitsApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BenefitsApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
