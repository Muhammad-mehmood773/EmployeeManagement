import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { HasUnsavedChanges } from '../../core/guards/unsaved-guard';
import { PersonalInfoBridge } from '../services/personal-info-bridge';

import { JobDetailsBridge } from '../services/job-details-bridge';
import { PersonalInformation } from "../personal-information/personal-information";
import { EmpJobDetails } from "../emp-job-details/emp-job-details";
import { CommonModule } from '@angular/common';
import { EmpAccessPermissions } from '../emp-access-permissions/emp-access-permissions';
import { AccessPermissionBridge } from '../services/access-permission-bridge';
import { EmpSkills } from "../emp-skills/emp-skills";
import { SkillBridge } from '../services/skill-bridge';
import { EmpAcademic } from '../emp-academic/emp-academic';
import { AcademicBridge } from '../services/academic-bridge';

@Component({
  selector: 'app-emp-layout',
  imports: [SHARED_IMPORTS, CommonModule],
  templateUrl: './emp-layout.html',
  styleUrl: './emp-layout.css',
  standalone: true,
  host: { ngSkipHydration: 'true' },
})
export class EmpLayout implements HasUnsavedChanges, OnInit {

  selectedIndex = 0;
  tabRoutes = [
    { title: 'Employee Personal Information', component: PersonalInformation },
    { title: 'Employee Job Details', component: EmpJobDetails },
    { title: 'Employee Skills & Documentation', component: EmpSkills },
    { title: 'Employee Academic`s', component: EmpAcademic },
    { title: 'Employee Assign Permissions', component: EmpAccessPermissions },
  ];
  hasError = false;
  constructor(
    private personalBridge: PersonalInfoBridge,
    private cdr: ChangeDetectorRef,
    private jobBridge: JobDetailsBridge,
    private accessBridge: AccessPermissionBridge,
    private skillBridge: SkillBridge,
    private academicBridge: AcademicBridge,
  ) { }

  ngOnInit() {

  }

  onTabChange(index: number): void {
    const unsaved =
      this.selectedIndex === 0 ? this.personalBridge.getUnsavedFn()?.() :
        this.selectedIndex === 1 ? this.jobBridge.getUnsavedFn()?.() :
          this.selectedIndex === 2 ? false :
            this.selectedIndex === 3 ? false :
              this.selectedIndex === 4 ? this.accessBridge.getUnsavedFn()?.() :
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
    const tabs = [
      { bridge: this.personalBridge, validate: true },
      { bridge: this.jobBridge, validate: true },
      { bridge: this.skillBridge, validate: false },
      { bridge: this.academicBridge, validate: false },
      { bridge: this.accessBridge, validate: true }
    ];

    const finalData: any = {};
    let hasAnyError = false;

    tabs.forEach((tab, index) => {
      let validateFn: (() => boolean) | null = null;
      let dataFn: (() => any) | null = null;

      if (tab.validate && 'getValidateFn' in tab.bridge) {
        validateFn = (tab.bridge as any).getValidateFn?.();
      }
      if ('getDataFn' in tab.bridge) {
        dataFn = (tab.bridge as any).getDataFn?.();
      }

      if (validateFn) {
        const valid = validateFn();
        if (!valid) hasAnyError = true;
      }

      finalData[index] = dataFn ? dataFn() : {};
    });

    console.log("Aggregate Employee Data:", finalData);

    if (hasAnyError) {
      this.hasError = true;
      console.warn("Some tabs have validation errors.");
    } else {
      this.hasError = false;
      console.log("All tabs valid!");
    }
  }

  hasUnsavedChanges(): boolean {
    return (
      (this.personalBridge.getUnsavedFn()?.() ?? false) ||
      (this.jobBridge.getUnsavedFn()?.() ?? false) ||
      (this.accessBridge.getUnsavedFn()?.() ?? false)
    );
  }



}
