import { CommonModule } from '@angular/common';
import { SHARED_IMPORTS } from './../../shared/theme/ng-zorro-imports';
import { Component, OnInit } from '@angular/core';
export interface EmployeePersonalDetails {
  dob: string;
  cnic: string;
  cnicExpDate: string;
  passportNumber: string;
  passportExpDate: string;
  nationality: string;
  religion: string;
  maritalStatus: string;
  gender: string;
  phone: string;
  email: string;
}

@Component({
  selector: 'app-employee-profile-view-personal-info-card',
  imports: [SHARED_IMPORTS,CommonModule],
  templateUrl: './employee-profile-view-personal-info-card.html',
  styleUrl: './employee-profile-view-personal-info-card.css',
})
export class EmployeeProfileViewPersonalInfoCard implements OnInit{
employee: EmployeePersonalDetails = {
  dob: "15 May 1998",
  cnic: "03131325462014",
  cnicExpDate: "15 May 2029",
  passportNumber: "0311556132416051",
  passportExpDate: "15 May 2029",
  nationality: "Egyptian",
  religion: "Islam",
  maritalStatus: "Married",
  gender: "Male",
  phone: "+92 3344 80324",
  email: "jamesmorrison@gmail.com"
};

  constructor() { }

  ngOnInit(): void {

  }

}
