import { Route } from '@angular/router';
import { EmpLayout } from '../Employee-Management/emp-layout/emp-layout';
import { UnsavedGuard } from '../core/guards/unsaved-guard';

export const employeeRoutes: Route[] = [
  {
    path: '',
    component: EmpLayout, // Shell layout
    children: [
      { path: '', redirectTo: 'personal-information', pathMatch: 'full' },
      {
        path: 'personal-information',
        loadComponent: () =>
          import('../Employee-Management/personal-information/personal-information').then(
            (m) => m.PersonalInformation
          ),
        canDeactivate: [UnsavedGuard],
      },
      {
        path: 'job-details',
        loadComponent: () =>
          import('../Employee-Management/emp-job-details/emp-job-details').then((m) => m.EmpJobDetails),
        canDeactivate: [UnsavedGuard],
      },
    ],
  },
];
