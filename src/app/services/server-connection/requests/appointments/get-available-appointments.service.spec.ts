import { TestBed } from '@angular/core/testing';

import { GetAvailableAppointmentsService } from './get-available-appointments.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('GetAvailableAppointmentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ RouterTestingModule],
    providers: [ HttpClient, HttpHandler ]
  }));

  it('should be created', () => {
    const service: GetAvailableAppointmentsService = TestBed.get(GetAvailableAppointmentsService);
    expect(service).toBeTruthy();
  });
});
