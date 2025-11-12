import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAccessPermissions } from './emp-access-permissions';

describe('EmpAccessPermissions', () => {
  let component: EmpAccessPermissions;
  let fixture: ComponentFixture<EmpAccessPermissions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpAccessPermissions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpAccessPermissions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
