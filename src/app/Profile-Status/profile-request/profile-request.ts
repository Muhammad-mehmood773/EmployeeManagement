import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { ProfileOverview } from "../profile-overview/profile-overview";
import {  ProfileBreadcrumb } from "../profile-breadcrumb/profile-breadcrumb";
import { ProfileExistingOverview } from "../profile-existing-overview/profile-existing-overview";

@Component({
  selector: 'app-profile-request',
  imports: [SHARED_IMPORTS, ProfileBreadcrumb, ProfileOverview, ProfileExistingOverview],
  templateUrl: './profile-request.html',
  styleUrl: './profile-request.css',
})
export class ProfileRequest {

}
