import { TestBed } from '@angular/core/testing';

import { ModifyProfileService } from './modify-profile.service';

describe('ModifyProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModifyProfileService = TestBed.get(ModifyProfileService);
    expect(service).toBeTruthy();
  });
});
