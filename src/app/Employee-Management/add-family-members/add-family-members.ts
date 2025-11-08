import { CommonModule, DatePipe } from '@angular/common';
import { SHARED_IMPORTS } from './../../shared/ng-zorro-imports';
import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { getNzErrorMessage } from '../../shared/helpers/validation-messages';
interface FamilyMember {
  name: string;
  dob: Date | null;
  phoneNumber: string;
  cnicOrPassportNumber: string;
  relationshipId: number;
  relationshipName: string;
}
@Component({
  selector: 'app-add-family-members',
  imports: [SHARED_IMPORTS, CommonModule, ReactiveFormsModule],
  templateUrl: './add-family-members.html',
  styleUrl: './add-family-members.css',
  host: { ngSkipHydration: 'true' },
  providers: [DatePipe]
})
export class AddFamilyMembers implements OnInit {


  familyDataList = signal<FamilyMember[]>([]);
  showFamilyForm = false;
  familyForm!: FormGroup;
  relationshipOptions = [
    { id: 1, name: 'Father' },
    { id: 2, name: 'Mother' },
    { id: 3, name: 'Son' },
    { id: 4, name: 'Daughter' },
    { id: 5, name: 'Brother' },
    { id: 6, name: 'Sister' },
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.familyForm = this.fb.group({
      name: [''],
      dob: [''],
      phoneNumber: [''],
      cnicOrPassportNumber: [''],
      relationshipId: [null],
    });
  }

  enableMandatoryFields(): void {
    this.familyForm.get('name')?.setValidators([Validators.required, Validators.maxLength(50)]);
    this.familyForm.get('phoneNumber')?.setValidators([Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]);
    this.familyForm.get('relationshipId')?.setValidators([Validators.required]);
    Object.values(this.familyForm.controls).forEach(c => c.updateValueAndValidity());
  }

    showForm(): void {
    this.showFamilyForm = !this.showFamilyForm ;
    
    if(this.showFamilyForm){
      this.enableMandatoryFields(); 
    }else{
    this.familyForm.reset();
    }
  }


  getError(controlName: string): string {
    const control = this.familyForm.get(controlName);
    return getNzErrorMessage(control, controlName);
  }

  markFormTouched(): void {
    Object.values(this.familyForm.controls).forEach((ctrl) => {
      ctrl.markAsTouched();
      ctrl.updateValueAndValidity();
    });
  }

  validateForm(): boolean {
    this.markFormTouched();
    return this.familyForm.valid;
  }

  get availableRelationships() {
    const usedIds = this.familyDataList().map(f => f.relationshipId);
    return this.relationshipOptions.filter(r => !usedIds.includes(r.id));
  }


  addMember(): void {
    if (!this.validateForm()) return;

    const formValue = this.familyForm.value;
    const relationObj = this.relationshipOptions.find(r => r.id === formValue.relationshipId);

    const newMember: FamilyMember = {
      name: formValue.name,
      dob: formValue.dob,
      phoneNumber: formValue.phoneNumber,
      cnicOrPassportNumber: formValue.cnicOrPassportNumber,
      relationshipId: formValue.relationshipId,
      relationshipName: relationObj ? relationObj.name : '',
    };

    this.familyDataList.update(list => [...list, newMember]);

    // Reset form after adding
    this.familyForm.reset();
    this.showFamilyForm = false ;

  }


  onDeleteMember(member: FamilyMember): void {
  this.familyDataList.update(list => list.filter(m => m !== member));
}

}
