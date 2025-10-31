import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/ng-zorro-imports';
import { PersonalInformation } from '../personal-information/personal-information';

@Component({
  selector: 'app-emp-layout',
   imports: [SHARED_IMPORTS,PersonalInformation],
  templateUrl: './emp-layout.html',
  styleUrl: './emp-layout.css',
})
export class EmpLayout {

}
