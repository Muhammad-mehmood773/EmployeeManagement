import { Route } from '@angular/router';

export const employeeRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('../Employee-Management/emp-layout/emp-layout').then(m => m.EmpLayout),
  }
];
