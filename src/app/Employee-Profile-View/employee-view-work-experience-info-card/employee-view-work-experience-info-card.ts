import { Component } from '@angular/core';
import { UploadedFile } from '../../Employee-Management/emp-academic/emp-academic';
import { EmployeeAcademicInfo } from '../employee-profile-view-employee-academic-info-card/employee-profile-view-employee-academic-info-card';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { CommonModule, DatePipe } from '@angular/common';
export interface EmployeeWorkExperience {
  company: string;
  designation: string;
  location: string;
  duration: string; // Jan-2022 - Dec-2026
  lastSalary: string;
  document: UploadedFile[];
}

@Component({
  selector: 'app-employee-view-work-experience-info-card',
  imports: [SHARED_IMPORTS, CommonModule],
  templateUrl: './employee-view-work-experience-info-card.html',
  styleUrl: './employee-view-work-experience-info-card.css',
      host: { ngSkipHydration: 'true' },
  providers: [DatePipe]
})
export class EmployeeViewWorkExperienceInfoCard {
  tableData: EmployeeWorkExperience[] = [
    {
      company: 'Tech Solutions Pvt Ltd',
      designation: 'Senior Software Engineer',
      location: 'Lahore, Pakistan',
      duration: 'Jan-2022 - Dec-2026',
      lastSalary: '150,000 PKR',
      document: [
        {
          uid: '101',
          name: 'ExperienceLetter.pdf',
          type: 'application/pdf',
          originFileObj: new Blob(['Sample Experience Letter'], { type: 'application/pdf' })
        }
      ]
    },

    {
      company: 'SoftVision Technologies',
      designation: 'Frontend Developer',
      location: 'Karachi, Pakistan',
      duration: 'Mar-2019 - Dec-2021',
      lastSalary: '95,000 PKR',
      document: [
        {
          uid: '102',
          name: 'RelievingLetter.jpg',
          type: 'image/jpeg',
          originFileObj: new Blob(['Relieving File'], { type: 'image/jpeg' })
        }
      ]
    },

    {
      company: 'Pixel Web Studio',
      designation: 'Junior Developer',
      location: 'Islamabad, Pakistan',
      duration: 'Jan-2017 - Feb-2019',
      lastSalary: '55,000 PKR',
      document: [] // no files
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
