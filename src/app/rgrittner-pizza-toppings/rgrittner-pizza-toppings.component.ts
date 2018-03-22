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

  constructor(private ptSvc: PizzaToppingsService) { }
  

  public toppingTypes: toppingType[];

  ngOnInit() {
    this.toppingTypes = this.ptSvc.getAvailablePizzaToppings()
    .map(x => ({ checked: false, topping: x, summary: ""}));
  }

  
  public checkAll() {
    this.toppingTypes.forEach(t => t.checked = true);
    
  }

  public uncheckAll() {
    this.toppingTypes.forEach(t => t.checked = false);
  }

  public listOfToppings: string;

  public whatWeLove(){
    this.listOfToppings = this.toppingTypes
      .filter(x => x.checked)
      .map(x => x.topping)
      .join(', ');
      

    //\this.toppingType.push({topping:})  ;
     
  }

}
