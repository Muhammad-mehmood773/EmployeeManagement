import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickAddEmpInfo } from './quick-add-emp-info';

describe('QuickAddEmpInfo', () => {
  let component: QuickAddEmpInfo;
  let fixture: ComponentFixture<QuickAddEmpInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickAddEmpInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickAddEmpInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
