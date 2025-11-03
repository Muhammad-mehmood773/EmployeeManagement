import { Component, ViewChild } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/ng-zorro-imports';
import { PersonalInformation } from '../personal-information/personal-information';

@Component({
  selector: 'app-emp-layout',
  imports: [SHARED_IMPORTS, PersonalInformation],
  templateUrl: './emp-layout.html',
  styleUrl: './emp-layout.css',
})
export class EmpLayout {


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

    const allData = {
      personalInfo: this.personalInfoComp.getPersonalInfoData(),
    };

    console.log('Final Form Object:', allData);
  }
}
