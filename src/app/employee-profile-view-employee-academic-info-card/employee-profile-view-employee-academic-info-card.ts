import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../shared/theme/ng-zorro-imports';
import { CommonModule, DatePipe } from '@angular/common';
import { UploadedFile } from '../Employee-Management/emp-academic/emp-academic';
export interface EmployeeAcademicInfo {
  institutionName: string;
  degree: string;
  fieldOfStudy: string;
  startDate: Date;
  startYear: number;
  endDate?: Date | null;
  endYear?: number | null;
  gradeOrPercentage?: string | null;
  document: UploadedFile[];
}
@Component({
  selector: 'app-employee-profile-view-employee-academic-info-card',
  imports: [SHARED_IMPORTS,CommonModule],
  templateUrl: './employee-profile-view-employee-academic-info-card.html',
  styleUrl: './employee-profile-view-employee-academic-info-card.css',
    host: { ngSkipHydration: 'true' },
  providers: [DatePipe]
})
export class EmployeeProfileViewEmployeeAcademicInfoCard {

tableData: EmployeeAcademicInfo[] = [
  {
    institutionName: 'Punjab University',
    degree: 'Bachelor of Science',
    fieldOfStudy: 'Computer Science',
    startDate: new Date('2018-09-01'),
    startYear: 2018,
    endDate: new Date('2022-06-30'),
    endYear: 2022,
    gradeOrPercentage: '3.75 GPA',
    document: [
      {
        uid: '1',
        name: 'Transcript.pdf',
        type: 'application/pdf',
        originFileObj: new Blob(['Sample Transcript File'], { type: 'application/pdf' })
      }
    ]
  },

  {
    institutionName: 'Government College Lahore',
    degree: 'Intermediate',
    fieldOfStudy: 'Pre-Engineering',
    startDate: new Date('2016-04-01'),
    startYear: 2016,
    endDate: new Date('2018-03-30'),
    endYear: 2018,
    gradeOrPercentage: '84%',
    document: [
      {
        uid: '2',
        name: 'Certificate.jpg',
        type: 'image/jpeg',
        originFileObj: new Blob(['Sample Image File'], { type: 'image/jpeg' })
      }
    ]
  },

  {
    institutionName: 'City School',
    degree: 'Matric',
    fieldOfStudy: 'Science',
    startDate: new Date('2014-04-01'),
    startYear: 2014,
    endDate: new Date('2016-03-30'),
    endYear: 2016,
    gradeOrPercentage: 'A+',
    document: [] // No files
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

}
