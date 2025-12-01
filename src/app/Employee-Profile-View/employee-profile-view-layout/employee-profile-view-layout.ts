import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';

@Component({
  selector: 'app-employee-profile-view-layout',
  imports: [SHARED_IMPORTS],
  templateUrl: './employee-profile-view-layout.html',
  styleUrl: './employee-profile-view-layout.css',
})
export class EmployeeProfileViewLayout implements OnInit{

  constructor() { }

  ngOnInit(): void {
    
  }

}
