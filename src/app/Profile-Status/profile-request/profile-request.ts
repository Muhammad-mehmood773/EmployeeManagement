import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { ProfileBreadcrumb } from "../../profile-breadcrumb/profile-breadcrumb";
import { ProfileOverview } from "../profile-overview/profile-overview";

@Component({
  selector: 'app-profile-request',
  imports: [SHARED_IMPORTS, ProfileBreadcrumb, ProfileOverview],
  templateUrl: './profile-request.html',
  styleUrl: './profile-request.css',
})
export class ProfileRequest {

}
