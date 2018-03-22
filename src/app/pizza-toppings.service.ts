import { Injectable } from '@angular/core';

@Injectable()
<<<<<<< HEAD
export class PizzaService {

  constructor() { }

  // public  getAvailablePizzaToppings()  {
  //   return [
  //     { name: 'More Cheese', cost: 0.10 }
  //     , { name: 'Sausage', cost: 0.50 }
  //     , { name: 'Pepperoni', cost: 0.75 } 
  //     , { name: 'Ham', cost: 0.75 } 
  //     , { name: 'Pineapple', cost: 0.75 } 
  //     , { name: 'Artichoke', cost: 0.75 } 
  //     , { name: 'Basil', cost: 0.75 }      
  //   ];
  // }



public getAvailablePizzaToppings() {
  return [
    "Extra Cheese"
    , "Sausage"
    , "Pepperoni"
    , "Mushrooms"
  ];
}


=======
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
>>>>>>> master
}
