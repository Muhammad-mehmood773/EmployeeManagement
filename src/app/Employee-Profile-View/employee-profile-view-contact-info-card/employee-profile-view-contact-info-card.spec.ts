import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeProfileViewContactInfoCard } from './employee-profile-view-contact-info-card';

describe('EmployeeProfileViewContactInfoCard', () => {
  let component: EmployeeProfileViewContactInfoCard;
  let fixture: ComponentFixture<EmployeeProfileViewContactInfoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeProfileViewContactInfoCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeProfileViewContactInfoCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
