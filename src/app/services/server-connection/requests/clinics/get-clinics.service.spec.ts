import { TestBed } from '@angular/core/testing';

import { GetClinicsService } from './get-clinics.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('GetClinicsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ RouterTestingModule],
    providers: [ HttpClient, HttpHandler ]
  }));

  it('should be created', () => {
    const service: GetClinicsService = TestBed.get(GetClinicsService);
    expect(service).toBeTruthy();
  });
});
