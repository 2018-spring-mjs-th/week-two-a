import { Component, OnInit } from '@angular/core';
import { PizzaToppingsService} from "../pizza-toppings.service";

interface jmPizzaTopping {
  name: String;
  checked: boolean;
  cost: number;
}

@Component({
  selector: 'jasontoppings',
  templateUrl: './jasontoppings.component.html',
  styleUrls: ['./jasontoppings.component.css']
})
export class JasontoppingsComponent implements OnInit {

  public pizzaToppings: jmPizzaTopping [];
  public pizzaDescription: string;
  public price: number;
  public toppingsPrice: number;
  constructor(private pizzaService: PizzaToppingsService) { }

  ngOnInit() { 
    this.pizzaToppings = this.pizzaService.getAvailablePizzaToppings().sort().reverse()
        .map(x =>({name: x, checked: false, cost: .50 }));
    this.pizzaDescription = "";
    this.price = 0
  }

  public checkAllToppings() {
    this.pizzaToppings.forEach(x => x.checked = true);
  }

  public removeAllToppings() {
    this.pizzaToppings.forEach(x => x.checked = false);
  }

  public updateToppings() {
    let toppingsPrice = 0;
    let numberOfSelectedTopping = this.pizzaToppings.filter(x=>x.checked ==true)
    this.price = 10

    if(numberOfSelectedTopping.length === 0) 
      {
      this.pizzaDescription = "You have a plain pizza."
      }
    else  {
    //console.log(this.price);
      
      this.pizzaDescription = "My pizza has ";
      this.pizzaDescription += this.pizzaToppings
              .filter(x => x.checked)
              .map(x => x.name)
              .join(', ');
    this.price = this.pizzaToppings.filter(x => x.checked).reduce(function(sum, each) { return sum + each.cost;},this.price)

      }

    this.pizzaDescription += " \nIt will cost $" + this.price;

  }

}