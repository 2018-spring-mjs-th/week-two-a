import { Component, OnInit } from '@angular/core';
import { PizzaToppingsService } from '../pizza-toppings.service';

interface toppingType {
  name: string;
  checked: boolean;
}

@Component({
  selector: 'aknapp-pizza-toppings',
  templateUrl: './aknapp-pizza-toppings.component.html',
  styleUrls: ['./aknapp-pizza-toppings.component.css']
})
export class AknappPizzaToppingsComponent implements OnInit {

  constructor(private ptService: PizzaToppingsService) { }
  public toppingTypes: toppingType[];
  public toppingChoices: string;

  ngOnInit() {
    this.toppingTypes = this.ptService.getAvailablePizzaToppings()
    .map(x => ({ name: x, checked: false }));
  }

  public checkAll() {
    this.toppingTypes = this.ptService.getAvailablePizzaToppings()
    .map(x => ({ name: x, checked: true }));
  }

  public checkNone() {
    this.toppingTypes = this.ptService.getAvailablePizzaToppings()
    .map(x => ({ name: x, checked: false }));
  }

  public refresh() {
   
    this.toppingChoices = "I love "
    this.toppingChoices += this.toppingTypes
    .filter(x => x.checked)
    .map(x => x.name)
    .join(', ');      
    this.toppingChoices += "!!!"
   
  }

}
