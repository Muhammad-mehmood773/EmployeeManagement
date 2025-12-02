import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { EmployeeProfileViewCard } from "../employee-profile-view-card/employee-profile-view-card";
import { CommonModule } from '@angular/common';
import { EmployeeProfileViewDetailCard } from "../employee-profile-view-detail-card/employee-profile-view-detail-card";
import { EmployeeProfileViewPersonalInfoCard } from "../employee-profile-view-personal-info-card/employee-profile-view-personal-info-card";
import { EmployeeProfileViewContactInfoCard } from "../employee-profile-view-contact-info-card/employee-profile-view-contact-info-card";

@Component({
  selector: 'app-employee-profile-view-layout',
  imports: [SHARED_IMPORTS, EmployeeProfileViewCard, CommonModule, EmployeeProfileViewDetailCard, EmployeeProfileViewPersonalInfoCard, EmployeeProfileViewContactInfoCard],
  templateUrl: './employee-profile-view-layout.html',
  styleUrl: './employee-profile-view-layout.css',
})
export class EmployeeProfileViewLayout implements OnInit{

  constructor() { }

  ngOnInit(): void {

  }

}
