import { Component, OnInit } from '@angular/core';
import { PizzaToppingsService } from '../pizza-toppings.service';

interface toppingType {
  name: string;
  checked: boolean;
  iLoveStatement: string;
}

@Component({
  selector: 'aknapp-pizza-toppings',
  templateUrl: './aknapp-pizza-toppings.component.html',
  styleUrls: ['./aknapp-pizza-toppings.component.css']
})
export class AknappPizzaToppingsComponent implements OnInit {

  constructor(private ptService: PizzaToppingsService) { }

  public toppingTypes: quizType[];

  ngOnInit() {
    this.toppingTypes = this.ptService.getAvailablePizzaToppings()
    .map(x => ({ name: x, checked: false, iLoveStatement: ""}));
  }

}
