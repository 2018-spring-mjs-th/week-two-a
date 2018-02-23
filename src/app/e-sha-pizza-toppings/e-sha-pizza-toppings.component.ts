import { Component, OnInit } from '@angular/core';
import { PizzaToppingsService } from '../pizza-toppings.service';

@Component({
  selector: 'e-sha-pizza-toppings',
  templateUrl: './e-sha-pizza-toppings.component.html',
  styleUrls: ['./e-sha-pizza-toppings.component.css']
})
export class EShaPizzaToppingsComponent implements OnInit {

  constructor(private pizzaService: PizzaToppingsService) { }

  ngOnInit() {
  }

}
