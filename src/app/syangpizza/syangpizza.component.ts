import { Component, OnInit } from '@angular/core';
import { PizzaToppingsService } from '../pizza-toppings.service';

@Component({
  selector: 'app-syangpizza',
  templateUrl: './syangpizza.component.html',
  styleUrls: ['./syangpizza.component.css']
})
export class SyangpizzaComponent implements OnInit {

  constructor(private pizzaToppingService: PizzaToppingsService) { }

  pizzaToppings = [];

  ngOnInit() {
    this.pizzaToppings = this.pizzaToppingService.getAvailablePizzaToppings().map(x => ({ name: x, checked: false }));
  }

  clearAll() {
    this.pizzaToppings = this.pizzaToppings.map(x => ({ ...x, checked: false }));    
    this.updateDisplayedToppings();
  }

  chosenTopping = "";
  
  updateDisplayedToppings() {
    this.chosenTopping = this.pizzaToppings
      .filter(x => x.checked)
      .map(x => x.name)
      .join(', ');
  }

}
