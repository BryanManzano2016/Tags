import { TestBed } from '@angular/core/testing';

import { ObtenerTagsCandidatosService } from './obtener-tags-candidatos.service';

describe('ObtenerTagsCandidatosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObtenerTagsCandidatosService = TestBed.get(ObtenerTagsCandidatosService);
    expect(service).toBeTruthy();
  });
});
