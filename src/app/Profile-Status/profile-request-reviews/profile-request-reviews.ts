import { Component, inject, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-request-reviews',
  imports: [SHARED_IMPORTS],
  templateUrl: './profile-request-reviews.html',
  styleUrl: './profile-request-reviews.css',
})
export class ProfileRequestReviews implements OnInit {


  route = inject(ActivatedRoute);
  id = this.route.snapshot.paramMap.get('id');
  employee = {
    name: 'John Doe',
    code: 'EMP007',
    submittedOn: '07-Jul-2025',
    requestedSections: ['Personal Info', 'Academic Info'],
     image: 'https://picsum.photos/80'
  };

  constructor() { }

  ngOnInit(): void {
    console.log("Received ID:", this.id);
  }

}
