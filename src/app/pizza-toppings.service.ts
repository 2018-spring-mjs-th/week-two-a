import { Injectable } from '@angular/core';

@Injectable()
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


}
