import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { CommonModule } from '@angular/common';
export interface EmployeeProfile {
  avatar: string;
  name: string;
  designation: string;
  employeeId: string;
  department: string;
  grade: string;
  reporting: string;
status: 'Approved' | 'Rejected' | 'Pending' | 'In Review' | 'Updated' | 'Active' | 'Inactive';
}

@Component({
  selector: 'app-employee-profile-view-card',
  imports: [SHARED_IMPORTS,CommonModule],
  templateUrl: './employee-profile-view-card.html',
  styleUrl: './employee-profile-view-card.css',
})
export class EmployeeProfileViewCard implements OnInit {

  randomNum = Math.floor(Math.random() * 70) + 1;

  employee: EmployeeProfile = {
    avatar: `https://i.pravatar.cc/150?img=${this.randomNum}`,
    name: 'Muhammad Mehmood',
    designation: 'Software Engineer',
    employeeId: 'EMP-101',
    department: 'Full Stack Developer',
    grade: 'muhammadmehmood@gmail.com',
    reporting: 'Sir Fared',
    status: 'Active'
  };

  constructor() { }

  ngOnInit(): void {

  }



  status: 'active' | 'inactive' = 'active';

  get badgeColor() {
    return this.status === 'active'
      ? '#52c41a'
      : '#bfbfbf';
  }

  get badgeText() {
    return this.status === 'active' ? 'Active' : 'Inactive';
  }

  get badgeStatus() {
    return this.status === 'active' ? 'processing' : 'default';
  }

    getStatusStyle(status: string) {
    switch (status.toLowerCase()) {
      case 'approved': return { bg: '#F6FFED', color: '#389E0D' };
      case 'active': return { bg: '#d1faa7ff', color: '#206105ff' };
      case 'pending': return { bg: '#FFF7E6', color: '#D48806' };
      case 'rejected': return { bg: '#FFF1F0', color: '#CF1322' };
      case 'Inactive': return { bg: '#FFF1F0', color: '#CF1322' };
      case 'updated':
      case 'in review': return { bg: '#E6F4FF', color: '#1677FF' };
      default: return { bg: '#f5f5f5', color: '#555' };
    }
  }

}