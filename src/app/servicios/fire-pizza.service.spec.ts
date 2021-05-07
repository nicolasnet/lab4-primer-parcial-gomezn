import { TestBed } from '@angular/core/testing';

import { FirePizzaService } from './fire-pizza.service';

describe('FirePizzaService', () => {
  let service: FirePizzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirePizzaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
