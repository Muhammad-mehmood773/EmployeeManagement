import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRequestReviews } from './profile-request-reviews';

describe('ProfileRequestReviews', () => {
  let component: ProfileRequestReviews;
  let fixture: ComponentFixture<ProfileRequestReviews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileRequestReviews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileRequestReviews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
