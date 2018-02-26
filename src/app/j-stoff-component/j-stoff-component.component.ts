import { Component, OnInit } from '@angular/core';
import { PizzaToppingsService } from "../pizza-toppings.service";

interface pizzaTopping {
    topping: string;
    checked: boolean;
}

@Component({
  selector: 'app-j-stoff-component',
  templateUrl: './j-stoff-component.component.html',
  styleUrls: ['./j-stoff-component.component.css']
})
export class JStoffComponentComponent implements OnInit {

    public pizzaToppings: pizzaTopping[];
    constructor(private pizzaSvc: PizzaToppingsService) { }

    ngOnInit() {
        this.pizzaToppings = this.pizzaSvc.getAvailablePizzaToppings()
            .map(x => ({topping: x, checked: false}));
    }

    public orderPizza() {
        
    }

}
