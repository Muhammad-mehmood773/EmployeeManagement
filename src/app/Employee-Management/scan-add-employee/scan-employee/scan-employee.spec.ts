import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanEmployee } from './scan-employee';

describe('ScanEmployee', () => {
  let component: ScanEmployee;
  let fixture: ComponentFixture<ScanEmployee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScanEmployee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScanEmployee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
