import { Route } from '@angular/router';
import { UnsavedGuard } from '../core/guards/unsaved-guard';

export const employeeRoutes: Route[] = [
{
    path: '',
    redirectTo: 'personal-information',
    pathMatch: 'full',
  },
   {
    path: 'personal-information',
    loadComponent: () => import('../Employee-Management/emp-layout/emp-layout').then(m => m.EmpLayout),
    canDeactivate: [UnsavedGuard],
  },
];
