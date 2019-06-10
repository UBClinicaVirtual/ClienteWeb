import { TestBed } from '@angular/core/testing';

import { UsertypeConfigService } from './usertype-config.service';

describe('UsertypeConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsertypeConfigService = TestBed.get(UsertypeConfigService);
    expect(service).toBeTruthy();
  });
});
