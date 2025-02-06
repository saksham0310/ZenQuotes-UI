import { TestBed } from '@angular/core/testing';

import { GetRandomQuotesService } from './get-random-quotes.service';

describe('GetRandomQuotesService', () => {
  let service: GetRandomQuotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRandomQuotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
