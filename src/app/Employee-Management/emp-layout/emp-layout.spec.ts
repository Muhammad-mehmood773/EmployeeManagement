import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpLayout } from './emp-layout';

describe('EmpLayout', () => {
  let component: EmpLayout;
  let fixture: ComponentFixture<EmpLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
