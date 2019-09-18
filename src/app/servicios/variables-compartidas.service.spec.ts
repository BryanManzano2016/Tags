import { TestBed } from '@angular/core/testing';

import { VariablesCompartidasService } from './variables-compartidas.service';

describe('VariablesCompartidasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VariablesCompartidasService = TestBed.get(VariablesCompartidasService);
    expect(service).toBeTruthy();
  });
});
