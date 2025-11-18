import { TestBed } from '@angular/core/testing';

import { SkillBridge } from './skill-bridge';

describe('SkillBridge', () => {
  let service: SkillBridge;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillBridge);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
