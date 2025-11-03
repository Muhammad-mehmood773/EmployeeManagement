import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../shared/ng-zorro-imports';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { getNzErrorMessage } from '../shared/helpers/validation-messages';

@Component({
  selector: 'app-present-address',
  imports: [SHARED_IMPORTS,ReactiveFormsModule, CommonModule],
  templateUrl: './present-address.html',
  styleUrl: './present-address.css',
})
export class PresentAddress implements OnInit {


  presentAddressForm!: FormGroup;


  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.presentAddressForm = this.fb.group({
      countryId: ['',[Validators.required]],
      provinceId: ['',[Validators.required]],
      cityId: ['',[Validators.required]],
      postalCode: [''],
      address: ['',[Validators.maxLength(300)]],
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

  onSubmit(): void {
    if (this.presentAddressForm.invalid) {
      this.markFormTouched();
      return;
    }

    console.log('Form Data:', this.presentAddressForm.value);
  }


}
