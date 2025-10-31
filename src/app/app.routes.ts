import { Routes } from '@angular/router';

export const routes: Routes = [
      {
    path: '',
    redirectTo: 'employee',
    pathMatch: 'full',
  },
//   {
//     path: 'home',
//     loadComponent: () =>
//       import('./home/home.component').then(m => m.HomeComponent),
//   },
  {
    path: 'employee',
    loadChildren: () =>
      import('./Employee-Management/emp-routes').then(m => m.employeeRoutes),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./shared/components/notfound/notfound').then(m => m.Notfound),
  },
];
