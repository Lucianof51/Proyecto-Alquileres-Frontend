import { TestBed } from '@angular/core/testing';

import { LocadoresService } from './locadores.service';

describe('LocadoresService', () => {
  let service: LocadoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocadoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
