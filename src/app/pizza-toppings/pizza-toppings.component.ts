import { Component, OnInit } from '@angular/core';
import { PizzaToppingsService } from '../pizza-toppings.service';

interface pizzaToppings {
  name: string;
  checked: boolean;
}

@Component({
  selector: 'pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements OnInit {

    constructor(private pizzaService: PizzaToppingsService) { }
  
    public pizzaToppings: pizzaToppings[];
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
        this.message = "My favorite toppings are ";
        selected.forEach(x => this.message += x.name + ', ');
        this.message = this.message.slice(0,-2) + ".";
  
      } else {
        this.message = '';
      }
    }
  
  }
