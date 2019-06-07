import { TestBed } from '@angular/core/testing';

import { GetSpecialitiesService } from './get-specialities.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('GetSpecialitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ RouterTestingModule],
    providers: [ HttpClient, HttpHandler ]
  }));

  it('should be created', () => {
    const service: GetSpecialitiesService = TestBed.get(GetSpecialitiesService);
    expect(service).toBeTruthy();
  });
});
