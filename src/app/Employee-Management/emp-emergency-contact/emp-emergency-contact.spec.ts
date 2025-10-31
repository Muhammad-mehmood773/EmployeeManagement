import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpEmergencyContact } from './emp-emergency-contact';

describe('EmpEmergencyContact', () => {
  let component: EmpEmergencyContact;
  let fixture: ComponentFixture<EmpEmergencyContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpEmergencyContact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpEmergencyContact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
