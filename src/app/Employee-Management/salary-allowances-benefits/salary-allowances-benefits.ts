import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output() formReady = new EventEmitter<FormGroup>();

  salaryPackForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.salaryPackForm = this.fb.group({
      basicSalary: [null, [Validators.required]],
      grossSalary: [null, [Validators.required]],
      salaryFrequencyId: [null, [Validators.required]],
      allowancesMapId: [null],
      benefitsId: [null],
    });
     this.formReady.emit(this.salaryPackForm);

  }

  getError(controlName: string): string {
    const control = this.salaryPackForm.get(controlName);
    return getNzErrorMessage(control, controlName);
  }



  markFormTouched(): void {
    Object.values(this.salaryPackForm.controls).forEach((ctrl) => {
      ctrl.markAsTouched();
      ctrl.updateValueAndValidity();
    });
  }

  validateForm(): boolean {
    this.markFormTouched();
    return this.salaryPackForm.valid;
  }

  isAllowanceModalVisible = false;

  openAllowanceModal() {
    this.isAllowanceModalVisible = true;
  }

  closeAllowanceModal() {
    this.isAllowanceModalVisible = false;
  }

}
