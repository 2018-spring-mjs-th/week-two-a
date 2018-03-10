import { Component, OnInit } from '@angular/core';
import { PizzaToppingsService } from '../pizza-toppings.service';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {

  constructor(private toppingSvc: PizzaToppingsService) { }

  toppings = [];

  ngOnInit() {
    this.toppings = this.toppingSvc.getAvailablePizzaToppings().map(x => ({ name: x, checked: false }));
  }

  chosenToppings = "";
  
  clearAll() {
    this.toppings = this.toppings.map(x => ({ ...x, checked: false }));    
    this.updateDisplayedToppings();
  }

  updateDisplayedToppings() {
    this.chosenToppings = this.toppings
      .filter(x => x.checked)
      .map(x => x.name)
      .join(', ');
  }
}
