import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileViewAcademicInfoupdates } from './profile-view-academic-infoupdates';

describe('ProfileViewAcademicInfoupdates', () => {
  let component: ProfileViewAcademicInfoupdates;
  let fixture: ComponentFixture<ProfileViewAcademicInfoupdates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileViewAcademicInfoupdates]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileViewAcademicInfoupdates);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
