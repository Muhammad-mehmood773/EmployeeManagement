import { Component, OnInit, ViewChild } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { getNzErrorMessage } from '../../shared/helpers/validation-messages';
import { addMonths } from 'date-fns';
import { SalaryAllowancesBenefits } from "../salary-allowances-benefits/salary-allowances-benefits";
import { AllowancesAndBenefits } from "../allowances-and-benefits/allowances-and-benefits";
import { BankPaymentDetails } from "../../bank-payment-details/bank-payment-details";

@Component({
  selector: 'app-emp-job-details',
  imports: [SHARED_IMPORTS, CommonModule, ReactiveFormsModule, SalaryAllowancesBenefits, AllowancesAndBenefits, BankPaymentDetails],
  templateUrl: './emp-job-details.html',
  styleUrl: './emp-job-details.css',
})
export class EmpJobDetails implements OnInit {


  jobDetailForm!: FormGroup;

  // ViewChild calling
  @ViewChild(SalaryAllowancesBenefits) salaryAllowancesBenefitsComp!: SalaryAllowancesBenefits;
  @ViewChild(AllowancesAndBenefits) allowancesAndBenefitsComp!: AllowancesAndBenefits;
  @ViewChild(BankPaymentDetails) bankPaymentDetailsComp!: BankPaymentDetails;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.jobDetailForm = this.fb.group({
      departmentId: [null, [Validators.required]],
      designationId: [null, [Validators.required]],
      gradeId: [null, [Validators.required]],
      locationId: [null],
      floorNumber: [null],
      room: [null],
      seat: [null],
      reportingAuthorityId: [null],
      joiningDate: [null, [Validators.required]],
      shiftId: [null, [Validators.required]],
      probationPeriod: [null, [Validators.required]],
      employeeTypeId: [null, [Validators.required]],
      phoneNumber: [null, [Validators.max(16)]],
      workExtension: [null, [Validators.maxLength(100)]],

    });

    this.jobDetailForm.get('joiningDate')?.valueChanges.subscribe((joiningDate: Date) => {
      if (joiningDate) {
        const probationDate = addMonths(new Date(joiningDate), 3);
        this.jobDetailForm.get('probationPeriod')?.setValue(probationDate);
      } else {
        this.jobDetailForm.get('probationPeriod')?.setValue(null);
      }
    });
  }

    /** 🔹 Validate all child + main forms */
  validateAllSections(): boolean {
    this.markFormTouched();
    const mainValid = this.jobDetailForm.valid;

    const salaryValid = this.salaryAllowancesBenefitsComp?.validateForm() ?? false;
    const allowanceValid = this.allowancesAndBenefitsComp?.validateForm() ?? false;
    const bankValid = this.bankPaymentDetailsComp?.validateForm() ?? false;

   
    return mainValid && salaryValid && allowanceValid && bankValid;
  }

  getError(controlName: string): string {
    const control = this.jobDetailForm.get(controlName);
    return getNzErrorMessage(control, controlName);
  }



  markFormTouched(): void {
    Object.values(this.jobDetailForm.controls).forEach((ctrl) => {
      ctrl.markAsTouched();
      ctrl.updateValueAndValidity();
    });
  }


    getjobInfoData() {
    return {
      ...this.jobDetailForm.value,
      salaryAllowancesBenefits: this.salaryAllowancesBenefitsComp?.salrayPackForm?.value,
      allowancesAndBenefits: this.allowancesAndBenefitsComp?.allowanceBenefitsForm?.value,
      bankPaymentDetails: this.bankPaymentDetailsComp?.bankDetailForm?.value,
    };
  }

}

