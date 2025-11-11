import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { HasUnsavedChanges } from '../../core/guards/unsaved-guard';
import { PersonalInfoBridge } from '../services/personal-info-bridge';

import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { JobDetailsBridge } from '../services/job-details-bridge';
import { PersonalInformation } from "../personal-information/personal-information";
import { EmpJobDetails } from "../emp-job-details/emp-job-details";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emp-layout',
  imports: [SHARED_IMPORTS, PersonalInformation, EmpJobDetails,CommonModule],
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
    private personalBridge: PersonalInfoBridge,
    private cdr: ChangeDetectorRef,
    private jobBridge: JobDetailsBridge,
  ) { }

  ngOnInit() {

  }



  onTabChange(index: number): void {
    const unsaved =
      this.selectedIndex === 0
        ? this.personalBridge.getUnsavedFn()?.()
        : this.jobBridge.getUnsavedFn()?.();

    if (unsaved) {
      const confirmSwitch = confirm('You have unsaved changes. Continue?');
      if (!confirmSwitch) return;
    }

    this.selectedIndex = index;
  }


  ngAfterViewInit() {
    this.cdr.detectChanges();
  }


  saveAll() {
    let validateFn, getDataFn;

    if (this.selectedIndex === 0) {
      validateFn = this.personalBridge.getValidateFn();
      getDataFn = this.personalBridge.getDataFn();
    } else if (this.selectedIndex === 1) {
      validateFn = this.jobBridge.getValidateFn();
      getDataFn = this.jobBridge.getDataFn();
    }

    if (!validateFn) {
      console.error('Validation function not registered yet!');
      return;
    }

    if (!validateFn()) {
      this.hasError = true;
      console.warn('Some forms are invalid!');
      return;
    }

    this.hasError = false;
    console.log('Final Form Object:', getDataFn ? getDataFn() : {});
  }



  hasUnsavedChanges(): boolean {
    const personalUnsaved = this.personalBridge.getUnsavedFn()?.() ?? false;
    const jobUnsaved = this.jobBridge.getUnsavedFn()?.() ?? false;
    return personalUnsaved || jobUnsaved;
  }

}
