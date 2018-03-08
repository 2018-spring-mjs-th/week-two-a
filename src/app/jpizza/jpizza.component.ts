import { Component, OnInit } from '@angular/core';
import { PizzaToppingsService } from '../pizza-toppings.service';

@Component({
  selector: 'app-jpizza',
  templateUrl: './jpizza.component.html',
  styleUrls: ['./jpizza.component.css']
})
export class JpizzaComponent implements OnInit {

  constructor(private ts: PizzaToppingsService) { }

  public toppings: any[];

  ngOnInit() {
    this.toppings = this.ts.getAvailablePizzaToppings()
      .map(x => ({name: x, checked: false}));
  }

}
