import { TestBed } from '@angular/core/testing';

import { FirebaseBasicService } from './firebase-basic.service';

describe('FirebaseBasicService', () => {
  let service: FirebaseBasicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseBasicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
