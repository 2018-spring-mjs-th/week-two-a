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
      , "Mushrooms"
    ];
  }
}
