import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryAllowancesBenefits } from './salary-allowances-benefits';

describe('SalaryAllowancesBenefits', () => {
  let component: SalaryAllowancesBenefits;
  let fixture: ComponentFixture<SalaryAllowancesBenefits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalaryAllowancesBenefits]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryAllowancesBenefits);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
