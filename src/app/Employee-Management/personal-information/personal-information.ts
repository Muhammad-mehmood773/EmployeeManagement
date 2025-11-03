import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/ng-zorro-imports';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { getNzErrorMessage } from '../../shared/helpers/validation-messages';
import { PermanentAddress } from '../../permanent-address/permanent-address';
import { PresentAddress } from '../../present-address/present-address';


@Component({
  selector: 'app-personal-information',
  imports: [SHARED_IMPORTS, PermanentAddress, PresentAddress, ReactiveFormsModule, CommonModule],
  templateUrl: './personal-information.html',
  styleUrl: './personal-information.css',
})
export class PersonalInformation implements OnInit {

  employeeForm!: FormGroup;
  activeTab = 0;

  tabs = [
    { title: 'Permanent Address', index: 0 },
    { title: 'Present Address', index: 1 }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(75)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(75)]],
      fatherName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(75)]],
      nationalityId: ['', [Validators.required]],
      religionId: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      cnicOrPassportNumber: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
      cnicOrPassportExpiryDate: ['', [Validators.required]],
      materialId: ['', [Validators.required]],
      genderId: ['', [Validators.required]],
      personalPhoneNumber: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      personalEmail: ['', [Validators.email, Validators.maxLength(100)]],
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

  onSubmit(): void {
    if (this.employeeForm.invalid) {
      this.markFormTouched();
      return;
    }

    console.log('Form Data:', this.employeeForm.value);
  }


}
