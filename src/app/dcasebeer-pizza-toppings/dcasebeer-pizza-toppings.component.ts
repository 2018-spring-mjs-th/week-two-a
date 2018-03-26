import { Component, OnInit } from '@angular/core';
import { PizzaToppingsService } from '../pizza-toppings.service';

interface topping {
  name: string;
  checked: boolean;
}

@Component({
  selector: 'dcasebeer-pizza-toppings',
  templateUrl: './dcasebeer-pizza-toppings.component.html',
  styleUrls: ['./dcasebeer-pizza-toppings.component.css']
})
export class DcasebeerPizzaToppingsComponent implements OnInit {

  constructor(private pts: PizzaToppingsService) { }

  public toppings: topping[];
  public toppingsMessage: string;

  ngOnInit() {
    this.toppingsMessage = 'No Toppings Selected';

    this.toppings = this.pts.getAvailablePizzaToppings()
      .map(x => ({ name: x, checked: false }));

    this.sortToppings();
  }

  public selectAll() {
    this.toppings.forEach(topping => topping.checked = true);
    this.refresh();
  }

  public clear() {
    this.toppings.forEach(topping => topping.checked = false);
    this.refresh();
  }

  private sortToppings() {
    this.toppings = this.toppings.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  public refresh() {
    let selectedToppings = this.toppings.filter(topping => topping.checked);
    let pineapplePresent = false;
    let hamPresent = false;

    if (selectedToppings.length == 0) {
      this.toppingsMessage = 'No Toppings Selected';
    } else {
      selectedToppings.forEach(topping => {
        if (topping.name == 'Pineapple') {
          pineapplePresent = true;
        }

        if (topping.name == 'Canadian Bacon') {
          hamPresent = true;
        }
      });

      if (pineapplePresent && hamPresent && selectedToppings.length == 2) {
        this.toppingsMessage = 'Hooray you choose a Hawaiian Pizza!';
      } else {
        this.toppingsMessage = 'Unfortunently you did not choose a Hawaiian Pizza please re-select toppings until you have choosen the correct pizza\n You chose: ';
        selectedToppings.forEach(topping => this.toppingsMessage += topping.name + ', ');
        this.toppingsMessage = this.toppingsMessage.substring(0, this.toppingsMessage.length - 2);
      }
    }
  }
}
