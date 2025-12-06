import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeViewWorkExperienceInfoCard } from './employee-view-work-experience-info-card';

describe('EmployeeViewWorkExperienceInfoCard', () => {
  let component: EmployeeViewWorkExperienceInfoCard;
  let fixture: ComponentFixture<EmployeeViewWorkExperienceInfoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeViewWorkExperienceInfoCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeViewWorkExperienceInfoCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
