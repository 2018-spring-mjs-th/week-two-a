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

  ngOnInit() {
    this.skPizzaToppings = this.skPizzaToppingService.getAvailableSkPizzaToppings()
      .map(p => ({name: p, checked: false}));
  }

}
