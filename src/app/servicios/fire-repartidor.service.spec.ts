import { TestBed } from '@angular/core/testing';

import { FireRepartidorService } from './fire-repartidor.service';

describe('FireRepartidorService', () => {
  let service: FireRepartidorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireRepartidorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
