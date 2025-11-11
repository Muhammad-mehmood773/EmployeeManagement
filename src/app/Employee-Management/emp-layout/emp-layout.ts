import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { HasUnsavedChanges } from '../../core/guards/unsaved-guard';
import { PersonalInfoBridge } from '../services/personal-info-bridge';

import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-emp-layout',
  imports: [SHARED_IMPORTS, RouterOutlet],
  templateUrl: './emp-layout.html',
  styleUrl: './emp-layout.css',
  standalone: true,
  host: { ngSkipHydration: 'true' },
})
export class EmpLayout implements HasUnsavedChanges, OnInit {

  selectedIndex = 0;
  tabRoutes = [
    { title: 'Personal Information', route: 'personal-information' },
    { title: 'Job Details', route: 'job-details' },
  ];

  hasError = false;
  constructor(
  private router: Router,
  private route: ActivatedRoute,
  private bridge: PersonalInfoBridge,
  private cdr: ChangeDetectorRef
) {}
  ngOnInit() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        const current = this.route.firstChild?.snapshot.routeConfig?.path;
        const index = this.tabRoutes.findIndex(t => t.route === current);
        if (index !== -1) {
          this.selectedIndex = index;
        }
      });

  }


  onTabChange(index: number) {
    this.selectedIndex = index;
    const routePath = this.tabRoutes[index].route;
    this.router.navigate([routePath], { relativeTo: this.route });
  }


ngAfterViewInit() {
  const current = this.route.firstChild?.snapshot.routeConfig?.path;
  const index = this.tabRoutes.findIndex(t => t.route === current);
  if (index !== -1) {
    this.selectedIndex = index;
    this.cdr.detectChanges();  // notify Angular about the change
  }
}

  saveAll() {
    const validateFn = this.bridge.getValidateFn();
    const getDataFn = this.bridge.getDataFn();

    if (validateFn && !validateFn()) {
      this.hasError = true;
      console.warn('Some forms are invalid!');
      return;
    }

    this.hasError = false;
    console.log('Final Form Object:', getDataFn);
  }

  hasUnsavedChanges(): boolean {
    const unsavedFn = this.bridge.getUnsavedFn();
    return unsavedFn ? unsavedFn() : false;
  }
}
