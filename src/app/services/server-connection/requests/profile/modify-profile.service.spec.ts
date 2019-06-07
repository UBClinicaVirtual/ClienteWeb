import { TestBed } from '@angular/core/testing';

import { ModifyProfileService } from './modify-profile.service';
import { HttpHandler, HttpClient } from '@angular/common/http';

describe('ModifyProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers : [ HttpClient, HttpHandler]
  }));

  it('should be created', () => {
    const service: ModifyProfileService = TestBed.get(ModifyProfileService);
    expect(service).toBeTruthy();
  });
});
