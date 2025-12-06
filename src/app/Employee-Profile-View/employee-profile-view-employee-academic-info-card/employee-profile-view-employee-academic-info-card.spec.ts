import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeProfileViewEmployeeAcademicInfoCard } from './employee-profile-view-employee-academic-info-card';

describe('EmployeeProfileViewEmployeeAcademicInfoCard', () => {
  let component: EmployeeProfileViewEmployeeAcademicInfoCard;
  let fixture: ComponentFixture<EmployeeProfileViewEmployeeAcademicInfoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeProfileViewEmployeeAcademicInfoCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeProfileViewEmployeeAcademicInfoCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
