import { Injectable } from '@angular/core';

@Injectable()
export class SvcService {

  constructor() { }

  public getToppings() {
    return [
      { name: 'Cheese', cost: 0.10 }
      , { name: 'Sausage', cost: 0.50 }
      , { name: 'Pepperonni', cost: 0.75 }      
    ];
  }

}
