import { Component, OnInit } from '@angular/core';
import { PizzaToppingsService } from '../pizza-toppings.service';

interface topping {
  name: string;
  checked: boolean;
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
      .map(x => ({ name: x, checked: false }));
  }

}
