import { TestBed } from '@angular/core/testing';

import { ServerConnectionService } from './server-connection.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ServerConnectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ RouterTestingModule],
    providers: [ HttpClient, HttpHandler ]
  }));

  it('should be created', () => {
    const service: ServerConnectionService = TestBed.get(ServerConnectionService);
    expect(service).toBeTruthy();
  });
});
