import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowancesAndBenefits } from './allowances-and-benefits';

describe('AllowancesAndBenefits', () => {
  let component: AllowancesAndBenefits;
  let fixture: ComponentFixture<AllowancesAndBenefits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllowancesAndBenefits]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllowancesAndBenefits);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
