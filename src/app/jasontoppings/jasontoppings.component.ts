import { Component, OnInit } from '@angular/core';
import { PizzaToppingsService} from "../pizza-toppings.service";

interface jmPizzaTopping {
  name: String;
  checked: boolean;
}

// interface jmPizzaTopping {
//   name: String;
//   checked: boolean;
//   cost:number;
// }

@Component({
  selector: 'jasontoppings',
  templateUrl: './jasontoppings.component.html',
  styleUrls: ['./jasontoppings.component.css']
})
export class JasontoppingsComponent implements OnInit {

  public pizzaToppings: jmPizzaTopping [];
  public pizzaDescription: string;
  public price: number;
  constructor(private pizzaService: PizzaToppingsService) { }

  ngOnInit() {
    this.pizzaToppings = this.pizzaService.getAvailablePizzaToppings()
        .map(x =>({name: x, checked: false}));
    this.pizzaDescription = "";
    this.price = 10
  }

  // ngOnInit() {
  //   this.pizzaToppings = this.pizzaService.getAvailablePizzaToppings()
  //       .map(x =>({name: x, checked: false, cost: 0}));
  //   this.pizzaDescription = "";
  //   this.price = 10
  // }
public checkAllToppings() {
  this.pizzaToppings.forEach(x => x.checked = true);
}

public removeAllToppings() {
  this.pizzaToppings.forEach(x => x.checked = false);
}

public updateToppings() {
  let numberOfSelectedTopping = this.pizzaToppings.filter(x=>x.checked ==true)

  if(numberOfSelectedTopping.length === 0) {
    this.pizzaDescription = "You have a plain pizza."
  }
  else {
  
  this.pizzaDescription = "My pizza has ";
  this.pizzaDescription += this.pizzaToppings
          .filter(x => x.checked)
          .map(x => x.name)
          .join(', ');
  
  }
  this.pizzaDescription += " \nIt will cost $" + this.price;
}


// public addToPrice() {

// }
}

