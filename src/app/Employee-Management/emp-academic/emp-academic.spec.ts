import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAcademic } from './emp-academic';

describe('EmpAcademic', () => {
  let component: EmpAcademic;
  let fixture: ComponentFixture<EmpAcademic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpAcademic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpAcademic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
