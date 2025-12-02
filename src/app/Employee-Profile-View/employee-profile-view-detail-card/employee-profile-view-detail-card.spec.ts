import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeProfileViewDetailCard } from './employee-profile-view-detail-card';

describe('EmployeeProfileViewDetailCard', () => {
  let component: EmployeeProfileViewDetailCard;
  let fixture: ComponentFixture<EmployeeProfileViewDetailCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeProfileViewDetailCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeProfileViewDetailCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
