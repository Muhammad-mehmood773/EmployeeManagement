import { QuickEmpLayout } from './Quick-Add-Employee/quick-emp-layout/quick-emp-layout';
import { Route } from '@angular/router';
import { UnsavedGuard } from '../core/guards/unsaved-guard';

export const employeeRoutes: Route[] = [
  { path: '', redirectTo: 'add-employee', pathMatch: 'full' },
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
  }

];
