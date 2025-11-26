import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileExistingOverview } from './profile-existing-overview';

describe('ProfileExistingOverview', () => {
  let component: ProfileExistingOverview;
  let fixture: ComponentFixture<ProfileExistingOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileExistingOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileExistingOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
