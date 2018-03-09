import { Component, OnInit } from '@angular/core';
import { PizzaToppingsService } from '../pizza-toppings.service';

interface PizzaTopping {
	name: string;
	checked: boolean;
}


@Component({
  selector: 'bciancio-pizza-toppings',
  templateUrl: './bciancio-pizza-toppings.component.html',
  styleUrls: ['./bciancio-pizza-toppings.component.css']
})
export class BciancioPizzaToppingsComponent implements OnInit {

	// Grab the Pizza Service
	constructor(private pizza_service: PizzaToppingsService) { }

	selected_toppings: string;
	topping_options: PizzaTopping[];
	
	// On init reference the pizza service and convert toppings to PizzaTopping object
	ngOnInit() {
		this.topping_options = this.pizza_service.getAvailablePizzaToppings()
			.map(x => ({ name: x, checked: false }));
	}

	clearAllToppings() {
		this.topping_options = this.topping_options
			.map(x => ({ ...x, checked: false }));
	}
	
	selectAllToppings() {
		this.topping_options = this.topping_options
			.map(x => ({ ...x, checked: true }));
	}

	refreshSelectedToppings() {	
		this.selected_toppings = this.topping_options
			.filter(x => x.checked)
			.map(x => x.name).join(', ');
	}
}
