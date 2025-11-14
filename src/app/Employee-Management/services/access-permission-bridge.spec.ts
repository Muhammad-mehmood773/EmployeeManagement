import { TestBed } from '@angular/core/testing';

import { AccessPermissionBridge } from './access-permission-bridge';

describe('AccessPermissionBridge', () => {
  let service: AccessPermissionBridge;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessPermissionBridge);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
