import { TestBed, inject } from '@angular/core/testing';

import { PizzaService } from './pizza-toppings.service';

describe('PizzaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: []
    });
  });

  it('should be created', inject([PizzaService], (service: PizzaService) => {
    expect(service).toBeTruthy();
  }));
});
