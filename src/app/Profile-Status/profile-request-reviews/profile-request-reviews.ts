import { Component, OnInit, inject } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import {  ProfileViewPersonalInformationUpdate } from "../profile-view-personal-information-update/profile-view-personal-information-update";
import { ProfileViewAcademicInfoupdates } from "../profile-view-academic-infoupdates/profile-view-academic-infoupdates";
import { ProfileViewDocumentUpdates } from "../profile-view-document-updates/profile-view-document-updates";
export interface EmployeeReview {
  id: number;
  name: string;
  code: string;
  submittedOn: string;
  requestedSections: string[];
  image: string;
}





@Component({
  selector: 'app-profile-request-reviews',
  imports: [SHARED_IMPORTS, CommonModule, ProfileViewPersonalInformationUpdate, ProfileViewAcademicInfoupdates, ProfileViewDocumentUpdates],
  templateUrl: './profile-request-reviews.html',
  styleUrl: './profile-request-reviews.css',
})
export class ProfileRequestReviews implements OnInit {
  
  route = inject(ActivatedRoute);
  id = this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
  }

  employee: EmployeeReview = {
    id: 2,
    name: 'John Doe',
    code: 'EMP007',
    submittedOn: '07-Jul-2025',
    requestedSections: ['Personal Info', 'Academic Info'],
    image: 'https://picsum.photos/80'
  };


 
 
}
