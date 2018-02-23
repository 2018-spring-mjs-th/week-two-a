import { Component, OnInit } from '@angular/core';
import { PizzaToppingsService } from '../pizza-toppings.service';

interface toppingType {
  checked: boolean;
  name: string;
}

@Component({
  selector: 'rbruinsma-toppings',
  templateUrl: './rbruinsma-pizza-toppings.component.html',
  styleUrls: ['./rbruinsma-pizza-toppings.component.css']
})
export class RbruinsmaPizzaToppingsComponent implements OnInit {

  constructor(private ptSvc: PizzaToppingsService) { }

  public toppingTypes: toppingType[];

  ngOnInit() {
    this.toppingTypes = this.ptSvc.getAvailablePizzaToppings()
    .map(x => ({ checked: false, name: x }));
  }

  public selectAllToppings() {
    this.toppingTypes = this.ptSvc.getAvailablePizzaToppings()
    .map(x => ({ checked: true, name: x }));
  }
  
  public unselectAllToppings() {
    this.toppingTypes = this.ptSvc.getAvailablePizzaToppings()
    .map(x => ({ checked: false, name: x }));
  }

  
}