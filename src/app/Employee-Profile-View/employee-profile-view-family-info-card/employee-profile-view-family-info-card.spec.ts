import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeProfileViewFamilyInfoCard } from './employee-profile-view-family-info-card';

describe('EmployeeProfileViewFamilyInfoCard', () => {
  let component: EmployeeProfileViewFamilyInfoCard;
  let fixture: ComponentFixture<EmployeeProfileViewFamilyInfoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeProfileViewFamilyInfoCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeProfileViewFamilyInfoCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
