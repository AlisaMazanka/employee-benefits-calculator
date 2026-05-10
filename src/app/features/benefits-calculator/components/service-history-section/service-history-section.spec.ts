import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHistorySection } from './service-history-section';

describe('ServiceHistorySection', () => {
  let component: ServiceHistorySection;
  let fixture: ComponentFixture<ServiceHistorySection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceHistorySection],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceHistorySection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
