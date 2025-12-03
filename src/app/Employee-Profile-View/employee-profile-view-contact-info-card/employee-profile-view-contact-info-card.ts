import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { CommonModule } from '@angular/common';
export interface EmergencyContact {
  name: string;
  relationship: string;
  contact: string;
  secondaryContact: string;
}

@Component({
  selector: 'app-employee-profile-view-contact-info-card',
  imports: [SHARED_IMPORTS,CommonModule],
  templateUrl: './employee-profile-view-contact-info-card.html',
  styleUrl: './employee-profile-view-contact-info-card.css',
})
export class EmployeeProfileViewContactInfoCard {
emergencyContacts: EmergencyContact[] = [
  {
    name: 'John Doe',
    relationship: 'Father',
    contact: '00 000 000 0000',
    secondaryContact: '00 000 000 0000'
  },
  {
    name: 'Sarah Williams',
    relationship: 'Mother',
    contact: '00 111 222 3333',
    secondaryContact: '00 444 555 6666'
  },
  {
    name: 'David Brown',
    relationship: 'Brother',
    contact: '00 777 888 9999',
    secondaryContact: '00 123 456 7890'
  }
];

}
