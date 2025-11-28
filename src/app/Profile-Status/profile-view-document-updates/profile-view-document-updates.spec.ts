import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileViewDocumentUpdates } from './profile-view-document-updates';

describe('ProfileViewDocumentUpdates', () => {
  let component: ProfileViewDocumentUpdates;
  let fixture: ComponentFixture<ProfileViewDocumentUpdates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileViewDocumentUpdates]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileViewDocumentUpdates);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
