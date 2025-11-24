import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMapAllowanceModal } from './add-map-allowance-modal';

describe('AddMapAllowanceModal', () => {
  let component: AddMapAllowanceModal;
  let fixture: ComponentFixture<AddMapAllowanceModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMapAllowanceModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMapAllowanceModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
