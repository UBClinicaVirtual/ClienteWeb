import { TestBed } from '@angular/core/testing';

import { GetAppointmentsService } from './get-appointments.service';

describe('GetAppointmentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAppointmentsService = TestBed.get(GetAppointmentsService);
    expect(service).toBeTruthy();
  });
});
