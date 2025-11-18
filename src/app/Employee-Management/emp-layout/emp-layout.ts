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
import { EmpAccessPermissions } from '../emp-access-permissions/emp-access-permissions';
import { AccessPermissionBridge } from '../services/access-permission-bridge';
import { EmpSkills } from "../emp-skills/emp-skills";
import { SkillBridge } from '../services/skill-bridge';

@Component({
  selector: 'app-emp-layout',
  imports: [SHARED_IMPORTS, PersonalInformation, EmpJobDetails, EmpAccessPermissions, CommonModule, EmpSkills],
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
    { title: 'Skills & Documents', route: 'skills-and-documents' },
    { title: 'Access & Permissions', route: 'access-and-permission' },
  ];

  hasError = false;
  constructor(
    private personalBridge: PersonalInfoBridge,
    private cdr: ChangeDetectorRef,
    private jobBridge: JobDetailsBridge,
    private accessBridge: AccessPermissionBridge,
    private skillBridge: SkillBridge,
  ) { }

  ngOnInit() {

  }

  onTabChange(index: number): void {
    const unsaved =
      this.selectedIndex === 0 ? this.personalBridge.getUnsavedFn()?.() :
        this.selectedIndex === 1 ? this.jobBridge.getUnsavedFn()?.() :
          this.selectedIndex === 2 ? false :  
            this.selectedIndex === 3 ? this.accessBridge.getUnsavedFn()?.() :
              false;

    if (unsaved) {
      this.hasError = true;
      return;
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
    }
    else if (this.selectedIndex === 1) {
      validateFn = this.jobBridge.getValidateFn();
      getDataFn = this.jobBridge.getDataFn();
    }
    else if (this.selectedIndex === 2) {
      getDataFn = this.skillBridge.getDataFn();
    }
    else if (this.selectedIndex === 3) {
      validateFn = this.accessBridge.getValidateFn();
      getDataFn = this.accessBridge.getDataFn();
    }

    // ⭐ SKIP VALIDATION FOR SKILLS TAB
    if (this.selectedIndex !== 2) {
      if (!validateFn) {
        console.error('Validation function missing!');
        return;
      }

      if (!validateFn()) {
        console.warn('Form invalid!');
        return;
      }
    }

    this.hasError = false;
    console.log("Final Submitted Data:", getDataFn ? getDataFn() : {});
  }


  hasUnsavedChanges(): boolean {
    return (
      (this.personalBridge.getUnsavedFn()?.() ?? false) ||
      (this.jobBridge.getUnsavedFn()?.() ?? false) ||
      (this.accessBridge.getUnsavedFn()?.() ?? false)
    );
  }

}
