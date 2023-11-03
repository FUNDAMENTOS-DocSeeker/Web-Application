import { TestBed } from '@angular/core/testing';

import { SaveAppointmentService } from './save-appointment.service';

describe('SaveAppointmentService', () => {
  let service: SaveAppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveAppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
