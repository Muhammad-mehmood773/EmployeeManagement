import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
export interface EmployeeDetail {
  phone: string;
  email: string;
  ext: string;
  location: string;
  floorNo: string;
  seatNo: string;
  room: string;
  shift: string;
}

@Component({
  selector: 'app-employee-profile-view-detail-card',
  imports: [SHARED_IMPORTS,CommonModule],
  templateUrl: './employee-profile-view-detail-card.html',
  styleUrl: './employee-profile-view-detail-card.css',
})
export class EmployeeProfileViewDetailCard {


  employee: EmployeeDetail = {
    phone: '00 163 2459 315',
    email: 'stephan.perault@thetechmenders..com',
    ext: '112',
    location: 'Houston',
    floorNo: '2nd',
    seatNo: '212',
    room: '02',
    shift: 'Afternoon',
  };


}

