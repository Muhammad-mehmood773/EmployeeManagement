import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { UploadedFile } from '../../Employee-Management/emp-academic/emp-academic';
export interface EmployeeDocument {
  name: string;           // Document name
  employeeType: string;   // e.g., Permanent, Contract
  uploadedOn: Date;
  status: string;         // e.g., Pending, Approved, Rejected
  documents: UploadedFile[];
}

@Component({
  selector: 'app-employee-view-documentation-info-card',
  templateUrl: './employee-view-documentation-info-card.html',
  styleUrl: './employee-view-documentation-info-card.css',
  imports: [SHARED_IMPORTS, CommonModule],
  host: { ngSkipHydration: 'true' },
  providers: [DatePipe]
})
export class EmployeeViewDocumentationInfoCard {
documentationTableData: EmployeeDocument[] = [
  {
    name: 'Employment Contract',
    employeeType: 'Permanent',
    uploadedOn: new Date('2025-01-10'),
    status: 'Approved',
    documents: [
      {
        uid: 'd1',
        name: 'EmploymentContract.pdf',
        type: 'application/pdf',
        originFileObj: new Blob(['Employment Contract File'], { type: 'application/pdf' })
      }
    ]
  },

  {
    name: 'NDA Agreement',
    employeeType: 'Contract',
    uploadedOn: new Date('2025-02-15'),
    status: 'Pending',
    documents: [
      {
        uid: 'd2',
        name: 'NDA_Agreement.pdf',
        type: 'application/pdf',
        originFileObj: new Blob(['NDA File'], { type: 'application/pdf' })
      }
    ]
  },

  {
    name: 'ID Proof',
    employeeType: 'Permanent',
    uploadedOn: new Date('2025-03-20'),
    status: 'Approved',
    documents: [] // no file
  }
];


  downloadFile(file: UploadedFile) {
    if (!file?.originFileObj) {
      console.error("No file data to download");
      return;
    }

    const blob = new Blob([file.originFileObj], { type: file.type });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    a.click();

    window.URL.revokeObjectURL(url);
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

}
