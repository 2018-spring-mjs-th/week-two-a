import { Injectable } from '@angular/core';

@Injectable()
export class PizzaToppingsService {

  constructor() { }

  public getAvailablePizzaToppings() {
    return [
      "Extra Cheese"
      , "Sausage"
      , "Pepperoni"
<<<<<<< HEAD
      , "Onions"
=======
      , "The Works"
>>>>>>> master
    ];
  }
}
