import { TestBed } from '@angular/core/testing';

import { SubrreditService } from './subrredit.service';

describe('SubrreditService', () => {
  let service: SubrreditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubrreditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
