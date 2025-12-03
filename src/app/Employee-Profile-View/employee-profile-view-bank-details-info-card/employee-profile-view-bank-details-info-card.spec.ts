import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeProfileViewBankDetailsInfoCard } from './employee-profile-view-bank-details-info-card';

describe('EmployeeProfileViewBankDetailsInfoCard', () => {
  let component: EmployeeProfileViewBankDetailsInfoCard;
  let fixture: ComponentFixture<EmployeeProfileViewBankDetailsInfoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeProfileViewBankDetailsInfoCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeProfileViewBankDetailsInfoCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
