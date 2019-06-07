import { TestBed } from '@angular/core/testing';

import { UsuarioService } from './usuario.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('UsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ RouterTestingModule],
    providers: [ HttpClient, HttpHandler ]
  }));

  it('should be created', () => {
    const service: UsuarioService = TestBed.get(UsuarioService);
    expect(service).toBeTruthy();
  });
});
