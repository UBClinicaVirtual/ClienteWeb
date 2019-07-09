import { TestBed } from '@angular/core/testing';

import { HcpService } from './hcp.service';

describe('HcpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HcpService = TestBed.get(HcpService);
    expect(service).toBeTruthy();
  });
});
