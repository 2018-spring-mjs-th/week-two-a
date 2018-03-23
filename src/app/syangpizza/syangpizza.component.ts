import { Component, OnInit } from '@angular/core';
import { PizzaToppingsService } from '../pizza-toppings.service';

@Component({
  selector: 'app-syangpizza',
  templateUrl: './syangpizza.component.html',
  styleUrls: ['./syangpizza.component.css']
})
export class SyangpizzaComponent implements OnInit {

  constructor(private ptservice: PizzaToppingsService) { }

  pizzaToppings = [];

  ngOnInit() {
    this.pizzaToppings = this.ptservice.getAvailablePizzaToppings().map(x => ({ name: x, checked: false }));
  }

  selectAll() {
    this.pizzaToppings = this.pizzaToppings.map(x=> ({...x, checked: true}));
    this.updateToppings();

  }
  clearAll() {
    this.pizzaToppings = this.pizzaToppings.map(x => ({...x, checked: false}));    
    this.updateToppings();
  }

  chosenTopping = "";

  updateToppings() {
    this.chosenTopping = this.pizzaToppings.filter(x => x.checked).map(x => x.name).join(', ');
  }

}
