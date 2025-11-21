import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickAddEmpJobDetail } from './quick-add-emp-job-detail';

describe('QuickAddEmpJobDetail', () => {
  let component: QuickAddEmpJobDetail;
  let fixture: ComponentFixture<QuickAddEmpJobDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickAddEmpJobDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickAddEmpJobDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
