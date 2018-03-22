import { Component, OnInit } from '@angular/core';
import { PizzaToppingsService } from '../pizza-toppings.service';

interface topping {
  name: string;
  checked: boolean;
}

interface toppingDisplay {
  toppingName: string[]
}

@Component({
  selector: 'e-sha-pizza-toppings',
  templateUrl: './e-sha-pizza-toppings.component.html',
  styleUrls: ['./e-sha-pizza-toppings.component.css']
})
export class EShaPizzaToppingsComponent implements OnInit {

  constructor(private pizzaService: PizzaToppingsService) { }
  public toppings: topping[];

  ngOnInit() {
    this.toppings = this.pizzaService.getAvailablePizzaToppings()
      .sort()
      .map(x => ({ name: x, checked: false }));
  }

    // Pizza Toppings


    chosenToppings: string = "";


  
    public addPizzaTopping() {
      this.chosenToppings = "I love "  + this.toppings
        .filter(x => x.checked)
        .map(x=> x.name)
        .join(', ')
        + "!!";

    }

    uncheckAllToppings() {
      this.toppings.forEach(t => t.checked = false);
      this.chosenToppings = "";
    }

    checkAllToppings() {
      this.toppings.forEach(t => t.checked = true);
      this.addPizzaTopping();
    }


}
