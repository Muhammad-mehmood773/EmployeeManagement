import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeProfileViewPersonalInfoCard } from './employee-profile-view-personal-info-card';

describe('EmployeeProfileViewPersonalInfoCard', () => {
  let component: EmployeeProfileViewPersonalInfoCard;
  let fixture: ComponentFixture<EmployeeProfileViewPersonalInfoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeProfileViewPersonalInfoCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeProfileViewPersonalInfoCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
