import { TestBed } from '@angular/core/testing';

import { HPService } from './hp.service';

describe('HPService', () => {
  let service: HPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
