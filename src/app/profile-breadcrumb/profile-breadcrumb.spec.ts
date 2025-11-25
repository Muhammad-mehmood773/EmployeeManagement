import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBreadcrumb } from './profile-breadcrumb';

describe('ProfileBreadcrumb', () => {
  let component: ProfileBreadcrumb;
  let fixture: ComponentFixture<ProfileBreadcrumb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileBreadcrumb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileBreadcrumb);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
