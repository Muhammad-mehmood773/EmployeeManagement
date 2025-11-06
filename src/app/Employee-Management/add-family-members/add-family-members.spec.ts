import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFamilyMembers } from './add-family-members';

describe('AddFamilyMembers', () => {
  let component: AddFamilyMembers;
  let fixture: ComponentFixture<AddFamilyMembers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFamilyMembers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFamilyMembers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
