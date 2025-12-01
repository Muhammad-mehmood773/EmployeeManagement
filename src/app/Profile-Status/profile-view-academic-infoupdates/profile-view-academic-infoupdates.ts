import { Component, inject } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { CommonModule } from '@angular/common';
import { InfoUpdate } from '../profile-view-personal-information-update/profile-view-personal-information-update';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-view-academic-infoupdates',
  imports: [SHARED_IMPORTS, CommonModule],
  templateUrl: './profile-view-academic-infoupdates.html',
  styleUrl: './profile-view-academic-infoupdates.css',
  host: { ngSkipHydration: 'true' },

})
export class ProfileViewAcademicInfoupdates {
  // -------------------------
  // ACADEMIC INFO FAKE DATA
  // -------------------------
  academicInfoUpdates: InfoUpdate[] = [
    {
      id: 1,
      field: 'Degree',
      oldValue: 'BBA',
      newValue: 'MBA',
      status: 'Pending',
      comment: ''
    },
    {
      id: 2,
      field: 'Grade',
      oldValue: '3.0',
      newValue: '3.5',
      status: 'Pending',
      comment: ''
    }
  ];
  route = inject(ActivatedRoute);
  id = this.route.snapshot.paramMap.get('id');
  editId: number | null = null;

  constructor() { }

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
      case 'approved': return { bg: '#F6FFED', color: '#389E0D' };
      case 'pending': return { bg: '#FFF7E6', color: '#D48806' };
      case 'disapproved': return { bg: '#FFF1F0', color: '#CF1322' };
      case 'rejected': return { bg: '#FFF1F0', color: '#CF1322' };
      case 'updated':
      case 'in review': return { bg: '#E6F4FF', color: '#1677FF' };
      default: return { bg: '#f5f5f5', color: '#555' };
    }
  }


  approveSelected() {
    this.academicInfoUpdates.forEach(item => {
      if (this.setOfCheckedId.has(item.id)) {
        item.status = 'Approved';
      }
    });

    // Clear selection after update
    // this.setOfCheckedId.clear();
    // this.refreshCheckedStatus();
  }

  rejectSelected() {
    this.academicInfoUpdates.forEach(item => {
      if (this.setOfCheckedId.has(item.id)) {
        item.status = 'Rejected';
      }
    });

    // Clear selection after update
    // this.setOfCheckedId.clear();
    // this.refreshCheckedStatus();
  }



  approveRow(row: InfoUpdate) {
    row.status = "Approved";
  }

  rejectRow(row: InfoUpdate) {
    row.status = "Rejected";
  }

startEdit(id: number): void {
  this.editId = id;
}

stopEdit(): void {
  this.editId = null;
}

}
