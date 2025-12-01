import { Route } from '@angular/router';
import { UnsavedGuard } from '../core/guards/unsaved-guard';

export const employeeRoutes: Route[] = [
  { path: '', redirectTo: 'quick-add-employee', pathMatch: 'full' },
  {
    path: 'add-employee',
    loadComponent: () =>
      import('../Employee-Management/emp-layout/emp-layout').then(
        (m) => m.EmpLayout
      ),
    canDeactivate: [UnsavedGuard],
  },
  {
    path: 'quick-add-employee',
    loadComponent: () =>
      import('../Employee-Management/Quick-Add-Employee/quick-emp-layout/quick-emp-layout').then(
        (m) => m.QuickEmpLayout
      ),
    canDeactivate: [UnsavedGuard],
  },
  {
    path: 'profile-request',
    loadComponent: () =>
      import('../Profile-Status/profile-request/profile-request').then(
        (m) => m.ProfileRequest
      ),
    canDeactivate: [UnsavedGuard],
  },
  {
    path: 'profile-request/:id/reviews',
    loadComponent: () =>
      import('../Profile-Status/profile-request-reviews/profile-request-reviews').then(
        (m) => m.ProfileRequestReviews
      ),
    canDeactivate: [UnsavedGuard],
  },
  {
    path: 'emp-profile-view',
    loadComponent: () =>
      import('../Employee-Profile-View/employee-profile-view-layout/employee-profile-view-layout').then(
        (m) => m.EmployeeProfileViewLayout
      ),
    canDeactivate: [UnsavedGuard],
  },

];
