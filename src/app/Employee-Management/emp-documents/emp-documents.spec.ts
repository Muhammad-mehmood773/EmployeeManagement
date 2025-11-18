import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDocuments } from './emp-documents';

describe('EmpDocuments', () => {
  let component: EmpDocuments;
  let fixture: ComponentFixture<EmpDocuments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpDocuments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpDocuments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
