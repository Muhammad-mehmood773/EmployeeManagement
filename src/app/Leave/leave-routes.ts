import { Route } from '@angular/router';
import { UnsavedGuard } from '../core/guards/unsaved-guard';

export const leaveRoutes: Route[] = [
  { path: '', redirectTo: 'add-leave', pathMatch: 'full' },
  {
    path: 'add-leave',
    loadComponent: () =>
      import('../Leave/add-leave/add-leave').then(
        (m) => m.AddLeave
      ),
    canDeactivate: [UnsavedGuard],
  }

];
