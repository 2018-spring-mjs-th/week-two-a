import { Component, OnInit } from '@angular/core';
import { PizzaToppingsService } from '../pizza-toppings.service';

interface toppingType {
  name: string;
  checked: boolean;
}

@Component({
  selector: 'component-ejuten',
  templateUrl: './component-ejuten.component.html',
  styleUrls: ['./component-ejuten.component.css']
})
export class ComponentEjutenComponent implements OnInit {

  constructor(private ptSvc: PizzaToppingsService) { }

    public toppingTypes: toppingType[];

    ngOnInit() {
        this.toppingTypes = this.ptSvc.getAvailablePizzaToppings()
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
