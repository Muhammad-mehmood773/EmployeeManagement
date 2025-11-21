import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../../shared/theme/ng-zorro-imports';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { getNzErrorMessage } from '../../../shared/helpers/validation-messages';

@Component({
  selector: 'app-quick-add-emp-info',
  imports: [SHARED_IMPORTS, ReactiveFormsModule],
  templateUrl: './quick-add-emp-info.html',
  styleUrl: './quick-add-emp-info.css',
})
export class QuickAddEmpInfo implements OnInit {

  employeeForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(75)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(75)]],
      personalEmail: ['', [Validators.required ,Validators.email, Validators.maxLength(100)]],
    });
  }

  getError(controlName: string): string {
    const control = this.employeeForm.get(controlName);
    return getNzErrorMessage(control, controlName);
  }


  markFormTouched(): void {
    Object.values(this.employeeForm.controls).forEach((ctrl) => {
      ctrl.markAsTouched();
      ctrl.updateValueAndValidity();
    });
  }

}
