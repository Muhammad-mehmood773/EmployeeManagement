import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankPaymentDetails } from './bank-payment-details';

describe('BankPaymentDetails', () => {
  let component: BankPaymentDetails;
  let fixture: ComponentFixture<BankPaymentDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankPaymentDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankPaymentDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
