import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Skeleten } from './skeleten';

describe('Skeleten', () => {
  let component: Skeleten;
  let fixture: ComponentFixture<Skeleten>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skeleten]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Skeleten);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
