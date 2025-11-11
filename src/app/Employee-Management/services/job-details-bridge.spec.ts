import { TestBed } from '@angular/core/testing';

import { JobDetailsBridge } from './job-details-bridge';

describe('JobDetailsBridge', () => {
  let service: JobDetailsBridge;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobDetailsBridge);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
