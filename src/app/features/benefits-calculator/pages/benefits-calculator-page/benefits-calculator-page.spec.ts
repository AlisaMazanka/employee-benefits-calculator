import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsCalculatorPage } from './benefits-calculator-page';

describe('BenefitsCalculatorPage', () => {
  let component: BenefitsCalculatorPage;
  let fixture: ComponentFixture<BenefitsCalculatorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenefitsCalculatorPage],
    }).compileComponents();

    fixture = TestBed.createComponent(BenefitsCalculatorPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
