import { Injectable } from '@angular/core';

@Injectable()
export class PizzaToppingsService {

  constructor() { }

  public getAvailablePizzaToppings() {
    return [
      "Extra Cheese"
      , "Sausage"
      , "Kalamata Olives"
      , "Spinach"
      , "Pepperoni"
      , "Onions"
      , "The Works"
    ];
  }
}
