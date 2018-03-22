import { Injectable } from '@angular/core';

@Injectable()
export class PizzaToppingsService {

  constructor() { }

  private delay = (ms) => {
    const startPoint = new Date().getTime()
    while (new Date().getTime() - startPoint <= ms) {/* wait */}
  };

  public getAvailablePizzaToppings() {

    this.delay(1000);

    return [
      "Extra Cheese"
      , "Chorizo"
      , "Green Peppers"
      , "Onions"
      , "Corn"
      , "Arugula"
      , "Sausage"
<<<<<<< HEAD
<<<<<<< HEAD
      , "Pepperoni"
      , "Pineapple because I'm going to hell"
=======
=======
      , "Pepperoni"
      , "Pineapple because I'm going to hell"
>>>>>>> master
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
>>>>>>> master
    ];
  }
}
