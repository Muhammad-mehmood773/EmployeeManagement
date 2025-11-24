import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMapBenefitsModal } from './add-map-benefits-modal';

describe('AddMapBenefitsModal', () => {
  let component: AddMapBenefitsModal;
  let fixture: ComponentFixture<AddMapBenefitsModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMapBenefitsModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMapBenefitsModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
