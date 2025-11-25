import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRequest } from './profile-request';

describe('ProfileRequest', () => {
  let component: ProfileRequest;
  let fixture: ComponentFixture<ProfileRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileRequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileRequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
