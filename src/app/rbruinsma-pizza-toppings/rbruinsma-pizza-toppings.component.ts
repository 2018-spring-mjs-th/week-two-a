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

  ngOnInit() {
  }

}
