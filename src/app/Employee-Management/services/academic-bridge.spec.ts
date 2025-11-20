import { TestBed } from '@angular/core/testing';

import { AcademicBridge } from './academic-bridge';

describe('AcademicBridge', () => {
  let service: AcademicBridge;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcademicBridge);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
