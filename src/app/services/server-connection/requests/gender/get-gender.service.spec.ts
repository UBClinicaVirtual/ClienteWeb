import { TestBed } from '@angular/core/testing';

import { GetGenderService } from './get-gender.service';

describe('GetGenderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetGenderService = TestBed.get(GetGenderService);
    expect(service).toBeTruthy();
  });
});
