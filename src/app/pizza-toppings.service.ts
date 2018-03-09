import { Injectable } from '@angular/core';

@Injectable()
export class PizzaToppingsService {

  constructor() { }

  public getAvailablePizzaToppings() {
    return [
      "Extra Cheese"
      , "Sausage"
      , "Chicken"
      , "Steak"
      , "Pepperoni"
      , "Green Olives"
      , "Black Olives"
      , "Carmalized Onions"
      , "Mushroom"
      , "Kalamata Olives"
      , "Spinach"
      , "Pepperoni"
      , "Onions"
      , "The Works"
    ];
  }
}
