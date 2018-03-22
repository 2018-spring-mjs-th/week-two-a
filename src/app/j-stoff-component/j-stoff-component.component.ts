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
    public outputMessage: string;
    constructor(private pizzaSvc: PizzaToppingsService) { }

    ngOnInit() {
        this.pizzaToppings = this.pizzaSvc.getAvailablePizzaToppings()
            .map(x => ({topping: x, checked: false}));
        this.outputMessage = "";
    }

    public orderPizza() {
        let message = "You ordered: ";
        let selectedToppings = this.pizzaToppings.filter(x => x.checked)
                                .map(x => x.topping)
                                .join(", ");
        message += selectedToppings;

        this.outputMessage = message;
    }
    
    public selectAll() {
        this.pizzaToppings.forEach(topping => {
            topping.checked = true
        });
    }

    public deselectAll() {
        this.pizzaToppings.forEach(topping => {
            topping.checked = false
        });
    }
}
