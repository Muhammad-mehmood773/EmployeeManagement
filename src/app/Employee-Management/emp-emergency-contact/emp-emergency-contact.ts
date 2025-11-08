import { Component, OnInit, signal } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/ng-zorro-imports';
import { CommonModule, DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { getNzErrorMessage } from '../../shared/helpers/validation-messages';
interface FamilyMember {
  name: string;
  primaryContact: string;
  secondoryContact: string;
  relationshipId: number;
  relationshipName: string;
}
@Component({
  selector: 'app-emp-emergency-contact',
  imports: [SHARED_IMPORTS, CommonModule, ReactiveFormsModule],
  templateUrl: './emp-emergency-contact.html',
  styleUrl: './emp-emergency-contact.css',
  host: { ngSkipHydration: 'true' },
  providers: [DatePipe]
})
export class EmpEmergencyContact implements OnInit {


  emergencyDataList = signal<FamilyMember[]>([]);
  showEmergencyForm = false;
  emergencyForm!: FormGroup;
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
    this.emergencyForm = this.fb.group({
      name: [''],
      primaryContact: [''],
      secondoryContact: [''],
      relationshipId: [null],
    });
  }

  enableMandatoryFields(): void {
    this.emergencyForm.get('name')?.setValidators([Validators.required, Validators.maxLength(50)]);
    this.emergencyForm.get('primaryContact')?.setValidators([Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]);
    this.emergencyForm.get('relationshipId')?.setValidators([Validators.required]);
    Object.values(this.emergencyForm.controls).forEach(c => c.updateValueAndValidity());
  }

  showForm(): void {
    this.showEmergencyForm = !this.showEmergencyForm;

    if (this.showEmergencyForm) {
      this.enableMandatoryFields();
    } else {
      this.emergencyForm.reset();
    }
  }


  getError(controlName: string): string {
    const control = this.emergencyForm.get(controlName);
    return getNzErrorMessage(control, controlName);
  }

  markFormTouched(): void {
    Object.values(this.emergencyForm.controls).forEach((ctrl) => {
      ctrl.markAsTouched();
      ctrl.updateValueAndValidity();
    });
  }

  validateForm(): boolean {
    this.markFormTouched();
    return this.emergencyForm.valid;
  }

  get availableRelationships() {
    const usedIds = this.emergencyDataList().map(f => f.relationshipId);
    return this.relationshipOptions.filter(r => !usedIds.includes(r.id));
  }


  addMember(): void {
    if (!this.validateForm()) return;

    const formValue = this.emergencyForm.value;
    const relationObj = this.relationshipOptions.find(r => r.id === formValue.relationshipId);

    const newMember: FamilyMember = {
      name: formValue.name,
      primaryContact: formValue.primaryContact,
      secondoryContact: formValue.secondoryContact,
      relationshipId: formValue.relationshipId,
      relationshipName: relationObj ? relationObj.name : '',
    };

    this.emergencyDataList.update(list => [...list, newMember]);

    // Reset form after adding
    this.emergencyForm.reset();
    this.showEmergencyForm = false;

  }


  onDeleteMember(member: FamilyMember): void {
    this.emergencyDataList.update(list => list.filter(m => m !== member));
  }
}