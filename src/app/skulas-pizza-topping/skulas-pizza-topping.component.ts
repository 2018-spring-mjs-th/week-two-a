import { Component, OnInit } from '@angular/core';
import { PizzaToppingsService } from '../pizza-toppings.service';

interface skPizzaTopping{
  name: string;
  checked: boolean;
}

@Component({
  selector: 'skulas-pizza-topping',
  templateUrl: './skulas-pizza-topping.component.html',
  styleUrls: ['./skulas-pizza-topping.component.css']
})
export class SkulasPizzaToppingComponent implements OnInit {

  constructor(private skPizzaToppingService: PizzaToppingsService) { }

  public skPizzaToppings: skPizzaTopping[];
  public pizzaDescription: string;

  ngOnInit() {
    this.skPizzaToppings = this.skPizzaToppingService.getAvailablePizzaToppings()
      .map(p => ({name: p, checked: false}));
    this.describePizza();
  }

  // skulasPizzaToppings
  allSkToppings = () => {
    this.skPizzaToppings.forEach(p => p.checked = true);
    this.describePizza();
  }

  noSkToppings = () => {
    this.skPizzaToppings.forEach(p => p.checked = false);
    this.describePizza();
  }

  updateTopping = (pizzaTopping) => {
    pizzaTopping.checked = !pizzaTopping.checked;
    this.describePizza();
  }

  describePizza = () => {
    this.pizzaDescription = (this.skPizzaToppings.filter(p => p.checked).length > 0)
      ? this.pizzaDescription = "I love " + this.skPizzaToppings.filter(p => p.checked).map(p => p.name).join(", ") + "."
      : this.pizzaDescription = "I love plain cheese.";
  }
}
