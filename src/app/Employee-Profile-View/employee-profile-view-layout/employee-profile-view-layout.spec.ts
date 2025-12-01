import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeProfileViewLayout } from './employee-profile-view-layout';

describe('EmployeeProfileViewLayout', () => {
  let component: EmployeeProfileViewLayout;
  let fixture: ComponentFixture<EmployeeProfileViewLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeProfileViewLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeProfileViewLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
