import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { UploadedFile } from '../../Employee-Management/emp-academic/emp-academic';
export interface EmployeeSkill {
  skillName: string;
  proficiency: string;     // e.g.: Beginner, Intermediate, Expert
  yearsOfExperience: number;
  certification: string;
  documents: UploadedFile[];
}

@Component({
  selector: 'app-employee-view-skills-info-card',
  imports: [SHARED_IMPORTS, CommonModule],
  templateUrl: './employee-view-skills-info-card.html',
  styleUrl: './employee-view-skills-info-card.css',
        host: { ngSkipHydration: 'true' },
  providers: [DatePipe]
})
export class EmployeeViewSkillsInfoCard {
skillsTableData: EmployeeSkill[] = [
  {
    skillName: 'Angular',
    proficiency: 'Expert',
    yearsOfExperience: 4,
    certification: 'Angular Advanced Certification - Google',
    documents: [
      {
        uid: 's1',
        name: 'AngularCertificate.pdf',
        type: 'application/pdf',
        originFileObj: new Blob(['Angular Certificate'], { type: 'application/pdf' })
      }
    ]
  },

  {
    skillName: 'React',
    proficiency: 'Intermediate',
    yearsOfExperience: 3,
    certification: 'React Developer - Meta',
    documents: [
      {
        uid: 's2',
        name: 'ReactCourse.jpg',
        type: 'image/jpeg',
        originFileObj: new Blob(['React Course'], { type: 'image/jpeg' })
      }
    ]
  },

  {
    skillName: 'Node.js',
    proficiency: 'Advanced',
    yearsOfExperience: 5,
    certification: 'Node.js Backend Developer',
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
}
