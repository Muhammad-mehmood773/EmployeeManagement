import { Component, OnInit } from '@angular/core';
import { getNzErrorMessage } from '../../shared/helpers/validation-messages';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-allowances-and-benefits',
  imports: [SHARED_IMPORTS,ReactiveFormsModule,CommonModule],
  templateUrl: './allowances-and-benefits.html',
  styleUrl: './allowances-and-benefits.css',
})
export class AllowancesAndBenefits implements OnInit{

  allowanceBenefitsForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.allowanceBenefitsForm = this.fb.group({
      totalBenefitsId: [null],
      totalAllowances: [null],
    });
  }

    getError(controlName: string): string {
      const control = this.allowanceBenefitsForm.get(controlName);
      return getNzErrorMessage(control, controlName);
    }
  
  
  
    markFormTouched(): void {
      Object.values(this.allowanceBenefitsForm.controls).forEach((ctrl) => {
        ctrl.markAsTouched();
        ctrl.updateValueAndValidity();
      });
    }

  }