import { TestBed } from '@angular/core/testing';

import { GetHcpsService } from './get-hcps.service';

describe('GetHcpsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetHcpsService = TestBed.get(GetHcpsService);
    expect(service).toBeTruthy();
  });
});
