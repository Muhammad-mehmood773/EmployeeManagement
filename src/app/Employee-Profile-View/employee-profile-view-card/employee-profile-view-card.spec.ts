import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeProfileViewCard } from './employee-profile-view-card';

describe('EmployeeProfileViewCard', () => {
  let component: EmployeeProfileViewCard;
  let fixture: ComponentFixture<EmployeeProfileViewCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeProfileViewCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeProfileViewCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
