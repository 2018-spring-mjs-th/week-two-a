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
      , "The Works"
    ];
  }

  public getAvailableSkPizzaToppings() {
    return [
      "Extra Cheese"
      , "Sausage"
      , "Pepperoni"
    ];
  }
}
