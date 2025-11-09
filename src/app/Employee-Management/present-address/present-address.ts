import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { getNzErrorMessage } from '../../shared/helpers/validation-messages';

@Component({
  selector: 'app-present-address',
  imports: [SHARED_IMPORTS, ReactiveFormsModule, CommonModule],
  templateUrl: './present-address.html',
  styleUrl: './present-address.css',
})
export class PresentAddress implements OnInit {


  presentAddressForm!: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.presentAddressForm = this.fb.group({
      countryId: ['', [Validators.required]],
      stateId: ['', [Validators.required]],
      cityId: ['', [Validators.required]],
      postalCode: [''],
      address: ['', [Validators.maxLength(512)]],
    });
  }


  getError(controlName: string): string {
    const control = this.presentAddressForm.get(controlName);
    return getNzErrorMessage(control, controlName);
  }

  markFormTouched(): void {
    Object.values(this.presentAddressForm.controls).forEach((ctrl) => {
      ctrl.markAsTouched();
      ctrl.updateValueAndValidity();
    });
  }

  validateForm(): boolean {
    this.markFormTouched();
    return this.presentAddressForm.valid;
  }




}
