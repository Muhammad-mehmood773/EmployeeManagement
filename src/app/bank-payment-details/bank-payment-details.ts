import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { getNzErrorMessage } from '../shared/helpers/validation-messages';
import { CommonModule } from '@angular/common';
import { SHARED_IMPORTS } from '../shared/theme/ng-zorro-imports';

@Component({
  selector: 'app-bank-payment-details',
  imports: [SHARED_IMPORTS, CommonModule, ReactiveFormsModule,],
  templateUrl: './bank-payment-details.html',
  styleUrl: './bank-payment-details.css',
})
export class BankPaymentDetails implements OnInit {

  bankDetailForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.bankDetailForm = this.fb.group({
      bankName: [null, [Validators.required, Validators.maxLength(80)]],
      bankAccountNumber: [null, [Validators.required]],
      ifscOrSwiftCode: [null],
      branchName: [null, [Validators.maxLength(80)]],
    });
  }

  getError(controlName: string): string {
    const control = this.bankDetailForm.get(controlName);
    return getNzErrorMessage(control, controlName);
  }



  markFormTouched(): void {
    Object.values(this.bankDetailForm.controls).forEach((ctrl) => {
      ctrl.markAsTouched();
      ctrl.updateValueAndValidity();
    });
  }

  validateForm(): boolean {
    this.markFormTouched();
    return this.bankDetailForm.valid;
  }
}
