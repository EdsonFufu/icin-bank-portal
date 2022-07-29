import { TestBed } from '@angular/core/testing';

import { CheckBookRequestService } from './check-book-request.service';

describe('CheckBookRequestService', () => {
  let service: CheckBookRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckBookRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
