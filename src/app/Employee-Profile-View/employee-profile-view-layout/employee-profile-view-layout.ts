import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { EmployeeProfileViewCard } from "../employee-profile-view-card/employee-profile-view-card";

@Component({
  selector: 'app-employee-profile-view-layout',
  imports: [SHARED_IMPORTS, EmployeeProfileViewCard],
  templateUrl: './employee-profile-view-layout.html',
  styleUrl: './employee-profile-view-layout.css',
})
export class EmployeeProfileViewLayout implements OnInit{

  constructor() { }

  ngOnInit(): void {

  }

}
