import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeViewDocumentationInfoCard } from './employee-view-documentation-info-card';

describe('EmployeeViewDocumentationInfoCard', () => {
  let component: EmployeeViewDocumentationInfoCard;
  let fixture: ComponentFixture<EmployeeViewDocumentationInfoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeViewDocumentationInfoCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeViewDocumentationInfoCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
