import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/ng-zorro-imports';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal-information',
  imports: [SHARED_IMPORTS, ReactiveFormsModule, CommonModule],
  templateUrl: './personal-information.html',
  styleUrl: './personal-information.css',
})
export class PersonalInformation implements OnInit {

  employeeForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstName: ['',[Validators.required,Validators.minLength(3), Validators.maxLength(75)]],
      lastName: ['',[Validators.required,Validators.minLength(3), Validators.maxLength(75)]],
      fatherName: ['',[Validators.required,Validators.minLength(3), Validators.maxLength(75)]],
      nationalityId: ['',[Validators.required]],
      religionId: ['',[Validators.required]],
      dob: ['',[Validators.required]],
      cnicOrPassportNumber:['',[Validators.required,Validators.minLength(13), Validators.maxLength(13)]],
      cnicPassportExpiryDate:['',[Validators.required]],
      materialId:['',[Validators.required]],
      genderId:['',[Validators.required]],
      personalPhoneNumber:['',[Validators.required,Validators.minLength(16), Validators.maxLength(16)]],
      personalEmail:['',[Validators.email, Validators.maxLength(100)]],
    });
  }

}
