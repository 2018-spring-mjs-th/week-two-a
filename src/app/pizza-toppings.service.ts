import { Injectable } from '@angular/core';

@Injectable()
export class PizzaToppingsService {

  constructor() { }

  public getAvailablePizzaToppings() {
    return [
      "Extra Cheese"
      , "Chorizo"
      , "Green Peppers"
      , "Onions"
      , "Corn"
      , "Arugula"
      , "Sausage"
      , "Basil"
      , "Bacon"
      , "Pineapple"
      , "Canadian Bacon"
      , "Chicken"
      , "Steak"
      , "Pepperoni"
      , "Green Olives"
      , "Black Olives"
      , "Carmalized Onions"
      , "Mushroom"
      , "Kalamata Olives"
      , "Spinach"
      , "Onions"
      , "The Works"
      , "Artichoke"
    ];
  }
}
