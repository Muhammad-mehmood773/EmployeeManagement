import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../shared/ng-zorro-imports';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { getNzErrorMessage } from '../shared/helpers/validation-messages';

@Component({
  selector: 'app-permanent-address',
  imports: [SHARED_IMPORTS, ReactiveFormsModule, CommonModule],
  templateUrl: './permanent-address.html',
  styleUrl: './permanent-address.css',
})
export class PermanentAddress implements OnInit {

  permanentAddressForm!: FormGroup;


  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.permanentAddressForm = this.fb.group({
      countryId: ['',[Validators.required]],
      provinceId: ['',[Validators.required]],
      cityId: ['',[Validators.required]],
      postalCode: [''],
      address: ['',[Validators.maxLength(300)]],
    });
  }


  getError(controlName: string): string {
    const control = this.permanentAddressForm.get(controlName);
    return getNzErrorMessage(control, controlName);
  }

  markFormTouched(): void {
    Object.values(this.permanentAddressForm.controls).forEach((ctrl) => {
      ctrl.markAsTouched();
      ctrl.updateValueAndValidity();
    });
  }

  onSubmit(): void {
    if (this.permanentAddressForm.invalid) {
      this.markFormTouched();
      return;
    }

    console.log('Form Data:', this.permanentAddressForm.value);
  }


}
