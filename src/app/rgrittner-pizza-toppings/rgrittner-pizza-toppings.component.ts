import { Component, OnInit, ViewChild } from '@angular/core';
import { PizzaToppingsService } from '../pizza-toppings.service';

interface toppingType {
  topping: string;
  checked: boolean;
}

@Component({
  selector: 'rgrittner-pizza-toppings',
  templateUrl: './rgrittner-pizza-toppings.component.html',
  styleUrls: ['./rgrittner-pizza-toppings.component.css']
})
export class RgrittnerPizzaToppingsComponent implements OnInit {

  
  constructor(private pizzaToppings: PizzaToppingsService) { }

  public toppingType: toppingType[];

  ngOnInit() {
    this.toppingType = this.pizzaToppings.getAvailablePizzaToppings()
      .map(x => ({topping: x, checked: false}));
  }

  
  public checkAll() {
    this.toppingType = this.pizzaToppings.getAvailablePizzaToppings()
      .map(x => ({topping: x, checked: true}));
  }

}
