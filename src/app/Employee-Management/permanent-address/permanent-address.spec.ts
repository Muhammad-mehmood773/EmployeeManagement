import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentAddress } from './permanent-address';

describe('PermanentAddress', () => {
  let component: PermanentAddress;
  let fixture: ComponentFixture<PermanentAddress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermanentAddress]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermanentAddress);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
