import { Component, OnInit, ViewChild } from '@angular/core';
import { PizzaToppingsService } from './pizza-toppings.service';

interface toppingType {
    topping: string;
    checked: boolean;
    summary: string;
}

@Component({
    selector: 'jpbong-pizza-toppings'
    , templateUrl: './jpbong-pizza-toppings.component.html'
})

export class JpbongPizzaToppingsComponent implements OnInit {
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

    public order() {
        this.listOfToppings = this.toppingType
            .filter(x => x.checked)
            .map(x => x.topping)
            .join(', ')
            console.log(this.listOfToppings);
    }
}