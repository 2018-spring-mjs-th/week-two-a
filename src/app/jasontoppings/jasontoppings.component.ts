import { Component, OnInit } from '@angular/core';
import { PizzaService} from "../pizza-toppings.service";

interface jmPizzaTopping {
  name: String;
  checked: boolean;
}

@Component({
  selector: 'jasontoppings',
  templateUrl: './jasontoppings.component.html',
  styleUrls: ['./jasontoppings.component.css']
})
export class JasontoppingsComponent implements OnInit {

  public pizzaToppings: jmPizzaTopping [];
  public pizzaDescription: string;
  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.pizzaToppings = this.pizzaService.getAvailablePizzaToppings()
        .map(x =>({name: x, checked: false}));
    this.pizzaDescription = "";
  }

}
