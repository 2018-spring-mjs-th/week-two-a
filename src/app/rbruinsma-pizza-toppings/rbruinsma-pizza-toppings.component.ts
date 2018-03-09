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
  public toppingsMessage: string;

  ngOnInit() {
    this.toppingTypes = this.ptSvc.getAvailablePizzaToppings()
    .map(x => ({ checked: false, name: x }));
  }

  public selectAllToppings() {
    this.toppingTypes.forEach(t => t.checked = true);
  }
  
  public unselectAllToppings() {
    this.toppingTypes.forEach(t => t.checked = false);
  }

  public toppingsILove() {
    var selectedToppings = this.toppingTypes.filter(x => x.checked)
    var toppingNumber = selectedToppings.length;
    if (toppingNumber == 0) {
      this.toppingsMessage = "I don't want any toppings on my pie!!!";
    } else {
      this.toppingsMessage = "I like " + 
      selectedToppings
      .map(x => x.name)
      .join(', ') + "!!!";
    }
  }
  
}