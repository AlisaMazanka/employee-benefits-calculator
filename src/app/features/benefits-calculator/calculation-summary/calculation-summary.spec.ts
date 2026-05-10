import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationSummary } from './calculation-summary';

describe('CalculationSummary', () => {
  let component: CalculationSummary;
  let fixture: ComponentFixture<CalculationSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculationSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculationSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
