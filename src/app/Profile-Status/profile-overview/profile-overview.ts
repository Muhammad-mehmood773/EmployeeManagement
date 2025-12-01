import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { CommonModule } from '@angular/common';
import { AccessPermissionBridge, ProfileViewMode } from '../../Employee-Management/services/access-permission-bridge';
import { Router } from '@angular/router';
export interface EmployeeProfileOverview {
  employeeId: string;
  employeeName: string;
  initials: string;
  avatar: string;
  submissionDate: string;
  status: 'Approved' | 'Rejected' | 'Pending' | 'In Review' | 'Updated';
}

@Component({
  selector: 'app-profile-overview',
  standalone: true,
  imports: [SHARED_IMPORTS, CommonModule],
  templateUrl: './profile-overview.html',
  styleUrl: './profile-overview.css',
  host: { ngSkipHydration: 'true' },

})
export class ProfileOverview implements OnInit{

 
  viewMode: ProfileViewMode = 'grid';

  constructor(private viewService: AccessPermissionBridge,private router: Router) {}

  ngOnInit() {
    this.viewService.viewMode$.subscribe(view => this.viewMode = view);
  }

  listOfData: EmployeeProfileOverview[] = [
    {
      employeeId: 'EMP-1022',
      employeeName: 'Muhammad Ali',
      initials: 'MA',
      avatar: 'https://i.pravatar.cc/150?img=1',
      submissionDate: '2025-11-20',
      status: 'Approved'
    },
    {
      employeeId: 'EMP-3090',
      employeeName: 'Ahsan Raza',
      initials: 'AR',
      avatar: 'https://i.pravatar.cc/150?img=3',
      submissionDate: '2025-11-24',
      status: 'Rejected'
    },
    {
      employeeId: 'EMP-2041',
      employeeName: 'Sara Khan',
      initials: 'SK',
      avatar: 'https://i.pravatar.cc/150?img=2',
      submissionDate: '2025-11-22',
      status: 'Pending'
    },
    {
      employeeId: 'EMP-5121',
      employeeName: 'Hira Sheikh',
      initials: 'HS',
      avatar: 'https://i.pravatar.cc/150?img=4',
      submissionDate: '2025-11-25',
      status: 'In Review'
    },
    {
      employeeId: 'EMP-5124',
      employeeName: 'Hira Sheikh',
      initials: 'HS',
      avatar: 'https://i.pravatar.cc/150?img=4',
      submissionDate: '2025-11-25',
      status: 'In Review'
    }
  ];

  goToReviews(id: string) {
  this.router.navigate(['/employee/profile-request', id, 'reviews']);
}

  getStatusStyle(status: string) {
    switch (status.toLowerCase()) {
      case 'approved': return { bg: '#F6FFED', color: '#389E0D' };
      case 'pending': return { bg: '#FFF7E6', color: '#D48806' };
      case 'rejected': return { bg: '#FFF1F0', color: '#CF1322' };
      case 'updated':
      case 'in review': return { bg: '#E6F4FF', color: '#1677FF' };
      default: return { bg: '#f5f5f5', color: '#555' };
    }
  }

}
