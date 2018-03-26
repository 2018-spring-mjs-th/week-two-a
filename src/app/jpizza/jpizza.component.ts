import { Component, OnInit } from '@angular/core';
import { PizzaToppingsService } from '../pizza-toppings.service';

@Component({
  selector: 'app-jpizza',
  templateUrl: './jpizza.component.html',
  styleUrls: ['./jpizza.component.css']
})
export class JpizzaComponent implements OnInit {

  constructor(private ts: PizzaToppingsService) { }

  public toppings: any[];
  public pieOrder = '';

  ngOnInit() {
    this.toppings = this.ts.getAvailablePizzaToppings()
      .map(x => ({ name: x, checked: false }));
  }

  unCheckToppings() {
    this.toppings.forEach(topping => topping.checked = false);
  }

  checkAll() {
    this.toppings.forEach(topping => topping.checked = true);
  }
  
  orderPie() {

    this.pieOrder = '';
    let selected = this.toppings.filter(x => x.checked);

    if (selected.length == 0) {
         this.pieOrder = 'No Selection Made. Try Again';
    } else {
      this.pieOrder = 'You ordered: ';
      selected.forEach(x => this.pieOrder += x.name + ', ');
      this.pieOrder = this.pieOrder.slice(0, -2) + '!';
      this.unCheckToppings();
    }
  }

}
