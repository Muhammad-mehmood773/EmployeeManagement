import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpFamilyInformation } from './emp-family-information';

describe('EmpFamilyInformation', () => {
  let component: EmpFamilyInformation;
  let fixture: ComponentFixture<EmpFamilyInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpFamilyInformation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpFamilyInformation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
