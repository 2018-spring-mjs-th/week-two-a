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
    this.unCheckToppings();
  }

  unCheckToppings() {
    this.toppings = this.ts.getAvailablePizzaToppings()
      .map(x => ({ name: x, checked: false }));
  }

  checkAll() {
    this.toppings = this.ts.getAvailablePizzaToppings()
      .map(x => ({ name: x, checked: true }));
  }

  orderPie() {
    let selected = this.toppings.filter(x => x.checked == true);

    if (selected.length > 0) {
      this.pieOrder = "You ordered: ";
      selected.forEach(x => this.pieOrder += x.name + ', ');
      this.pieOrder = this.pieOrder.slice(0, -2) + "!";
    } else {
      this.pieOrder = '';
    }
  }

}
