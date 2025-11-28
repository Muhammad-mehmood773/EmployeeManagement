import { Component, inject } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
export interface DocumentUpdate {
  id: number;
  document: string;
  type: string;
  uploadedOn: string;
  status: 'Verified' | 'Pending' | 'Disapproved';
  verifiedBy: string;
  comment?: string;
}
@Component({
  selector: 'app-profile-view-document-updates',
  imports: [SHARED_IMPORTS,CommonModule],
  templateUrl: './profile-view-document-updates.html',
  styleUrl: './profile-view-document-updates.css',
})
export class ProfileViewDocumentUpdates {
 
  route = inject(ActivatedRoute);
  id = this.route.snapshot.paramMap.get('id');
  documentUpdates: DocumentUpdate[] = [
    {
      id: 1,
      document: 'Offer Letter',
      type: 'Employment',
      uploadedOn: '01.08.2023',
      status: 'Verified',
      verifiedBy: 'Samanta – HR Manager',
      comment: 'Was signed on time'
    },
    {
      id: 2,
      document: 'Degree Certificate',
      type: 'Education',
      uploadedOn: '01.08.2023',
      status: 'Pending',
      verifiedBy: 'Samanta – HR Manager',
      comment: ''
    },
    {
      id: 3,
      document: 'Experience Letter',
      type: 'Work Experience',
      uploadedOn: '01.08.2023',
      status: 'Disapproved',
      verifiedBy: 'Samanta – HR Manager',
      comment: 'Official stamp missing'
    }
  ];

  constructor() {}

  ngOnInit(): void {
    console.log("Received ID:", this.id);
  }

  // ---- Checkbox Selection System (NZ TABLE) ----

setOfCheckedId = new Set<number>();

checked = false;
indeterminate = false;
listOfCurrentPageData: readonly any[] = [];

onCurrentPageDataChange($event: readonly any[]): void {
  this.listOfCurrentPageData = $event;
  this.refreshCheckedStatus();
}

updateCheckedSet(id: number, checked: boolean): void {
  if (checked) {
    this.setOfCheckedId.add(id);
  } else {
    this.setOfCheckedId.delete(id);
  }
}

onItemChecked(id: number, checked: boolean): void {
  this.updateCheckedSet(id, checked);
  this.refreshCheckedStatus();
}

onAllChecked(value: boolean): void {
  this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.id, value));
  this.refreshCheckedStatus();
}

refreshCheckedStatus(): void {
  this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id));
  this.indeterminate =
    this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
}


  getStatusStyle(status: string) {
    switch (status.toLowerCase()) {
      case 'verified': return { bg: '#F6FFED', color: '#389E0D' };
      case 'pending': return { bg: '#FFF7E6', color: '#D48806' };
      case 'disapproved': return { bg: '#FFF1F0', color: '#CF1322' };
      case 'updated':
      case 'in review': return { bg: '#E6F4FF', color: '#1677FF' };
      default: return { bg: '#f5f5f5', color: '#555' };
    }
  }

}
