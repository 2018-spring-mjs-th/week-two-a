import { Component, OnInit } from '@angular/core';
import { PizzaToppingsService } from '../pizza-toppings.service';

interface toppingType {
  name: string;
  checked: boolean;
}

@Component({
  selector: 'debert-pizza-toppings',
  templateUrl: './debert-pizza-toppings.component.html',
  styleUrls: ['./debert-pizza-toppings.component.css']
})
export class DebertPizzaToppingsComponent implements OnInit {

  constructor(private pSvc: PizzaToppingsService) { }

  public toppingTypes: toppingType[];

  ngOnInit() {
    this.toppingTypes = this.pSvc.getAvailablePizzaToppings()
      .map(x => ({ name: x, checked: false }));
  }

}
