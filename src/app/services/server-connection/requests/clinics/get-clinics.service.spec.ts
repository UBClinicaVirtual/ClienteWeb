import { TestBed } from '@angular/core/testing';

import { GetClinicsService } from './get-clinics.service';

describe('GetClinicsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetClinicsService = TestBed.get(GetClinicsService);
    expect(service).toBeTruthy();
  });
});
