import { TestBed } from '@angular/core/testing';

import { GetHcpsService } from './get-hcps.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('GetHcpsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ RouterTestingModule],
    providers: [ HttpClient, HttpHandler ]
  }));

  it('should be created', () => {
    const service: GetHcpsService = TestBed.get(GetHcpsService);
    expect(service).toBeTruthy();
  });
});
