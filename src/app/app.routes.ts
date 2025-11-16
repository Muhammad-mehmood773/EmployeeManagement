import { leaveRoutes } from './Leave/leave-routes';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  {
    path: 'employee',
    loadChildren: () => import('./Employee-Management/emp-routes').then(e => e.employeeRoutes),
  },
    {
    path: 'leave',
    loadChildren: () => import('./Leave/leave-routes').then(e => e.leaveRoutes),
  },
  { path: '**', loadComponent: () => import('./shared/components/notfound/notfound').then(m => m.Notfound) },
];
