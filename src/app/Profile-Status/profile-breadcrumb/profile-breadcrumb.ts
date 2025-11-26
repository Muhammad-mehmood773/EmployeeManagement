import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { AccessPermissionBridge, ProfileViewMode } from '../../Employee-Management/services/access-permission-bridge';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-breadcrumb',
  imports: [SHARED_IMPORTS,CommonModule],
  templateUrl: './profile-breadcrumb.html',
  styleUrl: './profile-breadcrumb.css',
})
export class ProfileBreadcrumb {
  currentView: ProfileViewMode = 'grid';

  constructor(private viewService: AccessPermissionBridge) {
    this.viewService.viewMode$.subscribe(view => this.currentView = view);
  }

  setView(view: ProfileViewMode) {
    this.viewService.setView(view);
  }
}
