import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSkills } from './emp-skills';

describe('EmpSkills', () => {
  let component: EmpSkills;
  let fixture: ComponentFixture<EmpSkills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpSkills]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpSkills);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
