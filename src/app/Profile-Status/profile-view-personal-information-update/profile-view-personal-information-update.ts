import { Component, inject } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
export interface InfoUpdate {
  id: any;
  field: string;
  oldValue: string;
  newValue: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  comment?: string;
}

@Component({
  selector: 'app-profile-view-personal-information-update',
  imports: [SHARED_IMPORTS, CommonModule],
  templateUrl: './profile-view-personal-information-update.html',
  styleUrl: './profile-view-personal-information-update.css',
  host: { ngSkipHydration: 'true' },

})
export class ProfileViewPersonalInformationUpdate {
personalInfoUpdates: InfoUpdate[] = [
  {
    id: 1,
    field: 'Phone Number',
    oldValue: '+92 333 144 188',
    newValue: '+92 333 144 188',
    status: 'Pending',
    comment: 'Comments regarding the change',
  },
  {
    id: 2,
    field: 'Address',
    oldValue: 'House 12',
    newValue: 'House 45',
    status: 'Pending',
    comment: '',
  }
];


  setOfCheckedId = new Set<number>();

  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly any[] = [];
  route = inject(ActivatedRoute);
  id = this.route.snapshot.paramMap.get('id');
  editId: number | null = null;


  ngOnInit(): void {
    console.log("Received ID:", this.id);
  }

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
  this.personalInfoUpdates.forEach(item => {
    if (this.setOfCheckedId.has(item.id)) {
      item.status = 'Approved';
    }
  });

  // Clear selection after update
  // this.setOfCheckedId.clear();
  // this.refreshCheckedStatus();
}

rejectSelected() {
  this.personalInfoUpdates.forEach(item => {
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
