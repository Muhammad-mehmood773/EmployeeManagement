import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { CommonModule } from '@angular/common';
export interface BankDetail {
  accountName: string;
  accountNumber: string;
  bankName: string;
  ifscCode: string;
}

@Component({
  selector: 'app-employee-profile-view-bank-details-info-card',
  imports: [SHARED_IMPORTS, CommonModule],
  templateUrl: './employee-profile-view-bank-details-info-card.html',
  styleUrl: './employee-profile-view-bank-details-info-card.css',
})
export class EmployeeProfileViewBankDetailsInfoCard implements OnInit {
  bankDetails: BankDetail = {
    accountName: 'Muhammad Mehmood',
    accountNumber: '1234-5678-9000',
    bankName: 'Meezan Bank',
    ifscCode: 'MEZNPKKAXXX'
  };
  constructor() { }

  ngOnInit(): void {

  }

}
