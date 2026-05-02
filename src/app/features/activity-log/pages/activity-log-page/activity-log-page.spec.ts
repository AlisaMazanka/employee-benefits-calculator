import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityLogPage } from './activity-log-page';

describe('ActivityLogPage', () => {
  let component: ActivityLogPage;
  let fixture: ComponentFixture<ActivityLogPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityLogPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ActivityLogPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
