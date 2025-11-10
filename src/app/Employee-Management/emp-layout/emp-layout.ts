import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { HasUnsavedChanges } from '../../core/guards/unsaved-guard';
import { RouterOutlet } from "@angular/router";
import { PersonalInfoBridge } from '../services/personal-info-bridge';
import { PersonalInformation } from '../personal-information/personal-information';
import { EmpJobDetails } from "../emp-job-details/emp-job-details";

@Component({
  selector: 'app-emp-layout',
  imports: [SHARED_IMPORTS, PersonalInformation, EmpJobDetails],
  templateUrl: './emp-layout.html',
  styleUrls: ['./emp-layout.css'], // ✅ plural form
  standalone: true,
  host: { ngSkipHydration: 'true' },

})
export class EmpLayout implements HasUnsavedChanges {

  hasError = false;

  constructor(private bridgeService: PersonalInfoBridge) { }
  saveAll() {
    const validateFn = this.bridgeService.getValidateFn();
    const getDataFn = this.bridgeService.getDataFn();

    if (validateFn && !validateFn()) {
      this.hasError = true;
      console.warn('Some forms are invalid!');
      return;
    }

    this.hasError = false;
    const allData = getDataFn;

    console.log('✅ Final Form Object:', allData);
  }

  hasUnsavedChanges(): boolean {
    const unsavedFn = this.bridgeService.getUnsavedFn();
    return unsavedFn ? unsavedFn() : false;
  }
}
