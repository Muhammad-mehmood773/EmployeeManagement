import { Route } from '@angular/router';
import { UnsavedGuard } from '../core/guards/unsaved-guard';

export const leaveRoutes: Route[] = [
  { path: '', redirectTo: 'list-leave', pathMatch: 'full' },
  {
    path: 'add-leave',
    loadComponent: () =>
      import('../Leave/add-leave/add-leave').then(
        (m) => m.AddLeave
      ),
    canDeactivate: [UnsavedGuard],
  },
  {
    path: 'list-leave',
    loadComponent: () =>
      import('../Leave/list-leave/list-leave').then(
        (m) => m.ListLeave
      ),
    canDeactivate: [UnsavedGuard],
  }

];
