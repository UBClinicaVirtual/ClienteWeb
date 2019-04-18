import { TestBed } from '@angular/core/testing';

import { GetSpecialitiesService } from './get-specialities.service';

describe('GetSpecialitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetSpecialitiesService = TestBed.get(GetSpecialitiesService);
    expect(service).toBeTruthy();
  });
});
