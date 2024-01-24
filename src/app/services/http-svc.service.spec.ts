import { TestBed } from '@angular/core/testing';

import { HttpSVCService } from './http-svc.service';

describe('HttpSVCService', () => {
  let service: HttpSVCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpSVCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
