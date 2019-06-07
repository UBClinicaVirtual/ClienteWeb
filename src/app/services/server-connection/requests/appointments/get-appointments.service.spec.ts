import { TestBed } from '@angular/core/testing';

import { GetAppointmentsService } from './get-appointments.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('GetAppointmentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ RouterTestingModule],
    providers: [ HttpClient, HttpHandler ]
  }));

  it('should be created', () => {
    const service: GetAppointmentsService = TestBed.get(GetAppointmentsService);
    expect(service).toBeTruthy();
  });
});
