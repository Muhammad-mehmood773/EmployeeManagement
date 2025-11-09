import { TestBed } from '@angular/core/testing';

import { PersonalInfoBridge } from './personal-info-bridge';

describe('PersonalInfoBridge', () => {
  let service: PersonalInfoBridge;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalInfoBridge);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
