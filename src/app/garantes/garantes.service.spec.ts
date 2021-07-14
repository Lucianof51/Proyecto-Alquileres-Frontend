import { TestBed } from '@angular/core/testing';

import { GarantesService } from './garantes.service';

describe('GarantesService', () => {
  let service: GarantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GarantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
