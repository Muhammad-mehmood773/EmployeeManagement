import { Component, OnInit, ViewChild } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/ng-zorro-imports';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { getNzErrorMessage } from '../../shared/helpers/validation-messages';
import { PermanentAddress } from '../permanent-address/permanent-address';
import { EmpProfile } from '../emp-profile/emp-profile';
import { PresentAddress } from '../present-address/present-address';


@Component({
  selector: 'app-personal-information',
  imports: [SHARED_IMPORTS, PermanentAddress, PresentAddress,EmpProfile, ReactiveFormsModule, CommonModule],
  templateUrl: './personal-information.html',
  styleUrl: './personal-information.css',
})
export class PersonalInformation implements OnInit {

  employeeForm!: FormGroup;
  activeTab = 0;

  // Child Component Data Get
  @ViewChild(PermanentAddress) permanentAddressComp!: PermanentAddress;
  @ViewChild(PresentAddress) presentAddressComp!: PresentAddress;
  @ViewChild(EmpProfile) employeeProfile!: EmpProfile;

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
      cnicOrPassportNumber: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(13)]],
      cnicOrPassportExpiryDate: ['', [Validators.required]],
      materialId: ['', [Validators.required]],
      genderId: ['', [Validators.required]],
      personalPhoneNumber: ['', [Validators.required, Validators.maxLength(16)]],
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
  /** 🔹 Validate all child + main forms */
  validateAllSections(): boolean {
    this.markFormTouched();
    const mainValid = this.employeeForm.valid;

    const permValid = this.permanentAddressComp?.validateForm() ?? false;
    const presentValid = this.presentAddressComp?.validateForm() ?? false;

    return mainValid && permValid && presentValid;
  }

  getPersonalInfoData() {
    return {
      ...this.employeeForm.value,
      permanentAddress: this.permanentAddressComp?.permanentAddressForm?.value,
      presentAddress: this.presentAddressComp?.presentAddressForm?.value,
      employeeProfile: this.employeeProfile?.employeeProfileForm?.value,
    };
  }


}
