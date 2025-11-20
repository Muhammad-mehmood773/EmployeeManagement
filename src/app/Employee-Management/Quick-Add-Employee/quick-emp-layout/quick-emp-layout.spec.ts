import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickEmpLayout } from './quick-emp-layout';

describe('QuickEmpLayout', () => {
  let component: QuickEmpLayout;
  let fixture: ComponentFixture<QuickEmpLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickEmpLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickEmpLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
