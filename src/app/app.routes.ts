import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  {
    path: 'employee',
    loadChildren: () => import('./Employee-Management/emp-routes').then(e => e.employeeRoutes),
  },
  { path: '**', loadComponent: () => import('./shared/components/notfound/notfound').then(m => m.Notfound) },
];
