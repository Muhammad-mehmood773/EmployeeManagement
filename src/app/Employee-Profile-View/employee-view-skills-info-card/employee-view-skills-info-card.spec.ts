import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeViewSkillsInfoCard } from './employee-view-skills-info-card';

describe('EmployeeViewSkillsInfoCard', () => {
  let component: EmployeeViewSkillsInfoCard;
  let fixture: ComponentFixture<EmployeeViewSkillsInfoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeViewSkillsInfoCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeViewSkillsInfoCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
