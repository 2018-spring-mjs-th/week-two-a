import { TestBed, inject } from '@angular/core/testing';

import { SvcService } from './svc.service';

describe('SvcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SvcService]
    });
  });

  it('should be created', inject([SvcService], (service: SvcService) => {
    expect(service).toBeTruthy();
  }));
});
