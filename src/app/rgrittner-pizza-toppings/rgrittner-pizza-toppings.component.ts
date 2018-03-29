import { Component, OnInit, ViewChild } from '@angular/core';
import { PizzaToppingsService } from '../pizza-toppings.service';

interface toppingType {
  topping: string;
  checked: boolean;
  summary: string;
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
      .map(x => ({topping: x, checked: false, summary: ""}));
  }

  
  public checkAll() {
    this.toppingType = this.pizzaToppings.getAvailablePizzaToppings()
      .map(x => ({topping: x, checked: true, summary: x}));
  }

  public uncheckAll() {
    this.toppingType = this.pizzaToppings.getAvailablePizzaToppings()
      .map(x => ({topping: x, checked: false, summary: ""}));
  }

  public listOfToppings: string;

  public whatWeLove(){
    this.listOfToppings = this.toppingType
      .filter(x => x.checked)
      .map(x => x.topping)
      .join(', ');
      console.log(this.listOfToppings);

    
     
  }

}
