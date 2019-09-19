import { TestBed } from '@angular/core/testing';

import { ProcesarTagsService } from './procesar-tags.service';

describe('ProcesarTagsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProcesarTagsService = TestBed.get(ProcesarTagsService);
    expect(service).toBeTruthy();
  });
});
