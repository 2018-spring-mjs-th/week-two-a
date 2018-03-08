import { Component, OnInit } from '@angular/core';
import { PizzaToppingsService } from '../pizza-toppings.service';

interface pizzaTopping {
  name: string;
  checked: boolean;
}

@Component({
  selector: 'somernik-pizza-toppings',
  templateUrl: './somernik-pizza-toppings.component.html',
  styleUrls: ['./somernik-pizza-toppings.component.css']
})
export class SomernikPizzaToppingsComponent implements OnInit {

  constructor(private pizzaService: PizzaToppingsService) { }

  public pizzaToppings: pizzaTopping[];
  public message = '';

  ngOnInit() {
    this.uncheckAll();
  }

  uncheckAll() {
    this.pizzaToppings = this.pizzaService.getAvailablePizzaToppings()
      .map(x => ({ name: x, checked: false }));
  }

  checkAll() {
    this.pizzaToppings = this.pizzaService.getAvailablePizzaToppings()
      .map(x => ({ name: x, checked: true }));
  }

  refresh() {
    let selected = this.pizzaToppings.filter(x => x.checked == true);

    if (selected.length > 0) {
      this.message = "I like ";
      selected.forEach(x => this.message += x.name + ', ');
      this.message = this.message.slice(0,-2) + "!";

    } else {
      this.message = '';
    }
  }

}
