import { Component } from '@angular/core';
import { AccessPermissionBridge, ProfileViewMode } from '../../Employee-Management/services/access-permission-bridge';
import { CommonModule } from '@angular/common';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';

@Component({
  selector: 'app-profile-existing-overview',
  imports: [CommonModule, SHARED_IMPORTS],
  templateUrl: './profile-existing-overview.html',
  styleUrl: './profile-existing-overview.css',
})
export class ProfileExistingOverview {
  viewMode: ProfileViewMode = 'grid';

  constructor(private viewService: AccessPermissionBridge) { }

  ngOnInit() {
    this.viewService.viewMode$.subscribe(view => this.viewMode = view);
  }

  listOfData = [
    {
      employeeId: 'EMP-1001',
      employeeName: 'Oliver',
      initials: 'O',
      avatar: 'https://i.pravatar.cc/150?img=5',
      submissionDate: '2025-07-07',
      sectionsUpdated: 'Personal, Academic, Skills',
      fieldsUpdated: '4 Fields',
      approved: 2,
      rejected: 2,
      pending: 5
    },
    {
      employeeId: 'EMP-1002',
      employeeName: 'Amelia',
      initials: 'A',
      avatar: 'https://i.pravatar.cc/150?img=6',
      submissionDate: '2025-07-06',
      sectionsUpdated: 'Documents',
      fieldsUpdated: '2 Fields',
      approved: 3,
      rejected: 3,
      pending: 2
    }
  ];



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
