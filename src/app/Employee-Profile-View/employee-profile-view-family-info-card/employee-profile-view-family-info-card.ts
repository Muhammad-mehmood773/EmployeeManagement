import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
export interface FamilyMember {
  name: string;
  relationship: string;
  dateOfBirth: string;
  phone: string;
  idCard: string;
}

@Component({
  selector: 'app-employee-profile-view-family-info-card',
  imports: [SHARED_IMPORTS, CommonModule],
  templateUrl: './employee-profile-view-family-info-card.html',
  styleUrl: './employee-profile-view-family-info-card.css',
})
export class EmployeeProfileViewFamilyInfoCard {
familyList: FamilyMember[] = [
    {
      name: 'Hendry Peralt',
      relationship: 'Brother',
      dateOfBirth: '25 May 2014',
      phone: '+1 265 6956 961',
      idCard: '+1 265 6956 961'
    },
    {
      name: 'Martha Rose',
      relationship: 'Mother',
      dateOfBirth: '10 Feb 1980',
      phone: '+1 251 8855 112',
      idCard: '+1 251 8855 112'
    },
    {
      name: 'Jonathan Peralt',
      relationship: 'Father',
      dateOfBirth: '03 Jan 1975',
      phone: '+1 265 9988 663',
      idCard: '+1 265 9988 663'
    }
  ];
}
