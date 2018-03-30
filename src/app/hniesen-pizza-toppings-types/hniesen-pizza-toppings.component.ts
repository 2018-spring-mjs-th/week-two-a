import { Component, OnInit } from '@angular/core'
import { PizzaToppingsService } from '../pizza-toppings.service';

interface toppingType {
    name: string;
    checked: boolean;
}

@Component({
    selector: 'app-hniesen-pizza-toppings',
    templateUrl: './hniesen-pizza-toppings.component.html',
    styleUrls: ['./hniesen-pizza-toppings.component.css']
})

export class HniesenPizzaToppingsComponent implements OnInit {

    constructor(private ptSvc: PizzaToppingsService) { }

    public toppingTypes: toppingType[];

    ngOnInit() {
        this.toppingTypes = this.ptSvc.getAvailablePizzaToppings()
            .sort()
            .map(x => ({ name: x, checked: false }));
    }

    public selectAll() {
        this.toppingTypes.forEach(x => x.checked = true);
    }

    public unselectAll() {
        this.toppingTypes.forEach(x => x.checked = false);
    }

    public myToppings: string = "";

    public refresh() {
        this.myToppings = this.toppingTypes
            .filter(x => x.checked)
            .map(x => x.name)
            .join(', ');
    }
}