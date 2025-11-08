import { Component, ViewChild } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/ng-zorro-imports';
import { PersonalInformation } from '../personal-information/personal-information';
import { HasUnsavedChanges, UnsavedGuard } from '../../core/guards/unsaved-guard';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-emp-layout',
  imports: [SHARED_IMPORTS, PersonalInformation],
  templateUrl: './emp-layout.html',
  styleUrl: './emp-layout.css',
  standalone:true
})
export class EmpLayout implements HasUnsavedChanges {

  @ViewChild(PersonalInformation) personalInfoComp!: PersonalInformation;

  hasError = false;

  saveAll() {
    const valid = this.personalInfoComp.validateAllSections();
    if (!valid) {
      this.hasError = true;
      console.warn('Some forms are invalid!');
      return;
    }
    this.hasError = false;
    const allData = { personalInfo: this.personalInfoComp.getPersonalInfoData() };
    console.log('Final Form Object:', allData);
  }

hasUnsavedChanges(): boolean {
    const mainFormDirty = this.personalInfoComp?.employeeForm?.dirty ?? false;
    const permDirty = this.personalInfoComp?.permanentAddressComp?.permanentAddressForm?.dirty ?? false;
    const presentDirty = this.personalInfoComp?.presentAddressComp?.presentAddressForm?.dirty ?? false;
    const familyDirty = this.personalInfoComp?.addFamilyMemberComp?.familyForm?.dirty ?? false;
    const profileDirty = this.personalInfoComp?.employeeProfile?.employeeProfileForm?.dirty ?? false;
    const emergencyDirty = this.personalInfoComp?.emergencyComp?.emergencyForm?.dirty ?? false;

    return mainFormDirty || permDirty || presentDirty || familyDirty || profileDirty || emergencyDirty;
  }
}
