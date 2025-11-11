import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { getNzErrorMessage } from '../../shared/helpers/validation-messages';
import { PermanentAddress } from '../permanent-address/permanent-address';
import { EmpProfile } from '../emp-profile/emp-profile';
import { PresentAddress } from '../present-address/present-address';
import { AddFamilyMembers } from '../add-family-members/add-family-members';
import { EmpEmergencyContact } from "../emp-emergency-contact/emp-emergency-contact";
import { PersonalInfoBridge } from '../services/personal-info-bridge';


@Component({
  selector: 'app-personal-information',
  imports: [SHARED_IMPORTS, PermanentAddress, AddFamilyMembers, PresentAddress, EmpProfile, ReactiveFormsModule, CommonModule, EmpEmergencyContact],
  templateUrl: './personal-information.html',
  styleUrl: './personal-information.css',
  standalone: true
})
export class PersonalInformation implements OnInit, AfterViewInit {

  employeeForm!: FormGroup;
  activeTab = 0;

  // Child Component Data Get
  @ViewChild(PermanentAddress) permanentAddressComp!: PermanentAddress;
  @ViewChild(PresentAddress) presentAddressComp!: PresentAddress;
  @ViewChild(EmpProfile) employeeProfile!: EmpProfile;
  @ViewChild(AddFamilyMembers) addFamilyMemberComp!: AddFamilyMembers;
  @ViewChild(EmpEmergencyContact) emergencyComp!: EmpEmergencyContact;

  tabs = [
    { title: 'Permanent Address', index: 0 },
    { title: 'Present Address', index: 1 }
  ];
constructor(private fb: FormBuilder, private bridgeService: PersonalInfoBridge, private cdr: ChangeDetectorRef) {}


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

    this.bridgeService.registerValidateFn(() => this.validateAllSections());
    this.bridgeService.registerDataFn(() => this.getPersonalInfoData());
    this.bridgeService.registerUnsavedFn(() => this.hasUnsavedChanges());
  }



  getError(controlName: string): string {
    const control = this.employeeForm.get(controlName);
    return getNzErrorMessage(control, controlName);
  }


  ngAfterViewInit(): void {
    this.bridgeService.registerValidateFn(() => this.validateAllSections());
    this.bridgeService.registerDataFn(() => this.getPersonalInfoData());
    this.bridgeService.registerUnsavedFn(() => this.hasUnsavedChanges());
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

  // ✅ Force Angular to refresh error states and UI bindings
  this.cdr.detectChanges();

  const mainValid = this.employeeForm.valid;
  const permValid = this.permanentAddressComp?.validateForm() ?? false;
  const presentValid = this.presentAddressComp?.validateForm() ?? false;

  let familyValid = true; 
  if (this.addFamilyMemberComp?.showFamilyForm) {
    familyValid = this.addFamilyMemberComp.validateForm();
  }

  let emergencyValid = true; 
  if (this.emergencyComp?.showEmergencyForm) {
    emergencyValid = this.emergencyComp.validateForm();
  }

  return mainValid && permValid && presentValid && familyValid && emergencyValid;
}



  getPersonalInfoData() {
    return {
      ...this.employeeForm.value,
      permanentAddress: this.permanentAddressComp?.permanentAddressForm?.value,
      presentAddress: this.presentAddressComp?.presentAddressForm?.value,
      employeeProfile: this.employeeProfile?.employeeProfileForm?.value,
      familyMembers: this.addFamilyMemberComp?.familyDataList(),
      emergencyContact: this.emergencyComp?.emergencyDataList(),
    };
  }

  hasUnsavedChanges(): boolean {
    const mainDirty = this.employeeForm.dirty;
    const permDirty = this.permanentAddressComp?.permanentAddressForm?.dirty ?? false;
    const presentDirty = this.presentAddressComp?.presentAddressForm?.dirty ?? false;
    const familyDirty = this.addFamilyMemberComp?.familyForm?.dirty ?? false;
    const emergencyDirty = this.emergencyComp?.emergencyForm?.dirty ?? false;
    const profileDirty = this.employeeProfile?.employeeProfileForm?.dirty ?? false;
    return mainDirty || permDirty || presentDirty || familyDirty || emergencyDirty || profileDirty;
  }

}
