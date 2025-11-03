import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentAddress } from './present-address';

describe('PresentAddress', () => {
  let component: PresentAddress;
  let fixture: ComponentFixture<PresentAddress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentAddress]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentAddress);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
