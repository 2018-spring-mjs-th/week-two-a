import { Component, OnInit } from '@angular/core';
import { PizzaToppingsService } from '../pizza-toppings.service';

interface pizza_topping {
  name: string;
  checked: boolean;
}

@Component({
  selector: 'luiiigii-pizza-palace',
  templateUrl: './luiiigii-pizza-toppings.component.html',
  styleUrls: ['./luiiigii-pizza-toppings.component.css']
})
export class LuiiigiisPizzaPalaceComponent implements OnInit {

  constructor(private pizza_service: PizzaToppingsService) { }

  public pizza_toppings: pizza_topping[];
  public message = '';

  ngOnInit() {
    this.pizza_toppings = this.pizza_service.getAvailablePizzaToppings()
      .map(x => ({ name: x, checked: false }));
  }

  deselect_all() {
    this.pizza_toppings = this.pizza_toppings.map(x => ({...x, checked: false }));
  }

  select_all() {
    this.pizza_toppings = this.pizza_toppings.map(x => ({...x, checked: true }));
  }

  order() {
    let selected = this.pizza_toppings.filter(x => x.checked == true);

    if (selected.length > 0) {
      this.message = "Serving up a pie with ";
      selected.forEach(x => this.message += x.name + ', ');
      this.message = this.message.slice(0,-2) + "!";
    } else {
      this.message = '';
    }
  }

}