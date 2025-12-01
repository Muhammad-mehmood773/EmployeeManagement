import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';

@Component({
  selector: 'app-employee-profile-view-card',
  imports: [SHARED_IMPORTS],
  templateUrl: './employee-profile-view-card.html',
  styleUrl: './employee-profile-view-card.css',
})
export class EmployeeProfileViewCard implements OnInit{

  constructor() { }

  ngOnInit(): void {

  }

}