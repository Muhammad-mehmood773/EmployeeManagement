import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { HasUnsavedChanges } from '../../core/guards/unsaved-guard';
import { RouterOutlet } from "@angular/router";
import { PersonalInfoBridge } from '../services/personal-info-bridge';

@Component({
  selector: 'app-emp-layout',
  imports: [SHARED_IMPORTS, RouterOutlet],
  templateUrl: './emp-layout.html',
  styleUrl: './emp-layout.css',
  standalone: true
})
export class EmpLayout implements HasUnsavedChanges {

  hasError = false;

  constructor(private bridge: PersonalInfoBridge) { }
  saveAll() {
    const validateFn = this.bridge.getValidateFn();
    const getDataFn = this.bridge.getDataFn();

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
    const unsavedFn = this.bridge.getUnsavedFn();
    return unsavedFn ? unsavedFn() : false;
  }
}
