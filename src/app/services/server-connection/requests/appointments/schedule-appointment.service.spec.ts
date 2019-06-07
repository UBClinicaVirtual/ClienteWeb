import { TestBed } from '@angular/core/testing';

import { ScheduleAppointmentService } from './schedule-appointment.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ScheduleAppointmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers : [ HttpClient, HttpHandler]
  }));

  it('should be created', () => {
    const service: ScheduleAppointmentService = TestBed.get(ScheduleAppointmentService);
    expect(service).toBeTruthy();
  });
});
