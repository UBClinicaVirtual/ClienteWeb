import { TestBed } from '@angular/core/testing';

import { GetAvailableAppointmentsService } from './get-available-appointments.service';

describe('GetAvailableAppointmentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAvailableAppointmentsService = TestBed.get(GetAvailableAppointmentsService);
    expect(service).toBeTruthy();
  });
});
