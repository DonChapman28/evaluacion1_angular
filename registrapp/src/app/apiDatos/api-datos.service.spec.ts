import { TestBed } from '@angular/core/testing';

import { ApiDatosService } from './api-datos.service';

describe('ApiDatosService', () => {
  let service: ApiDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
