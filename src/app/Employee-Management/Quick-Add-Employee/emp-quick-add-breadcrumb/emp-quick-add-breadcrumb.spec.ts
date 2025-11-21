import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpQuickAddBreadcrumb } from './emp-quick-add-breadcrumb';

describe('EmpQuickAddBreadcrumb', () => {
  let component: EmpQuickAddBreadcrumb;
  let fixture: ComponentFixture<EmpQuickAddBreadcrumb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpQuickAddBreadcrumb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpQuickAddBreadcrumb);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
