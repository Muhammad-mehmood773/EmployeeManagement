import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { getNzErrorMessage } from '../../shared/helpers/validation-messages';

@Component({
  selector: 'app-salary-allowances-benefits',
  imports: [SHARED_IMPORTS, ReactiveFormsModule, CommonModule],
  templateUrl: './salary-allowances-benefits.html',
  styleUrl: './salary-allowances-benefits.css',
})
export class SalaryAllowancesBenefits implements OnInit {

  salrayPackForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.salrayPackForm = this.fb.group({
      basicSalary: [null, [Validators.required]],
      grossSalary: [null, [Validators.required]],
      salaryFrequencyId: [null, [Validators.required]],
      allowancesMapId: [null],
      totalAllowances: [null],
    });
  }

  getError(controlName: string): string {
    const control = this.salrayPackForm.get(controlName);
    return getNzErrorMessage(control, controlName);
  }



  markFormTouched(): void {
    Object.values(this.salrayPackForm.controls).forEach((ctrl) => {
      ctrl.markAsTouched();
      ctrl.updateValueAndValidity();
    });
  }

  validateForm(): boolean {
    this.markFormTouched();
    return this.salrayPackForm.valid;
  }
}
