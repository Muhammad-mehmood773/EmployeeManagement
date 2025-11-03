import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpProfile } from './emp-profile';

describe('EmpProfile', () => {
  let component: EmpProfile;
  let fixture: ComponentFixture<EmpProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
