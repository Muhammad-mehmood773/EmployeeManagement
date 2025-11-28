import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileViewPersonalInformationUpdate } from './profile-view-personal-information-update';

describe('ProfileViewPersonalInformationUpdate', () => {
  let component: ProfileViewPersonalInformationUpdate;
  let fixture: ComponentFixture<ProfileViewPersonalInformationUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileViewPersonalInformationUpdate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileViewPersonalInformationUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
