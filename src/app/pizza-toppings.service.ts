import { Injectable } from '@angular/core';

@Injectable()
export class PizzaToppingsService {

  constructor() { }

  public getAvailablePizzaToppings() {
    return [
      "Cheese"
      , "Sausage"
      , "Pepperoni"
    ];
  }
}
