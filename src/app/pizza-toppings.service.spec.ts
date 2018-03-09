import { TestBed, inject } from '@angular/core/testing';

import { PizzaToppingsService } from './pizza-toppings.service';

describe('PizzaToppingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PizzaToppingsService]
    });
  });

  it('should be created', inject([PizzaToppingsService], (service: PizzaToppingsService) => {
    expect(service).toBeTruthy();
  }));
});
