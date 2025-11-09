import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpJobDetails } from './emp-job-details';

describe('EmpJobDetails', () => {
  let component: EmpJobDetails;
  let fixture: ComponentFixture<EmpJobDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpJobDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpJobDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
