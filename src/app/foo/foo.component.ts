import { Component, OnInit } from '@angular/core';
import { SvcService } from '../svc.service';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {

  constructor(private toppingSvc: SvcService) { }

  toppings = [];

  ngOnInit() {
    this.toppings = this.toppingSvc.getToppings().map(x => ({ ...x, checked: false }));
  }

  chosenToppings = "";
  
  set toggleAllState(newState) {
    //window.alert('here');

    this.toppings.forEach(x => x.checked = newState);
  }

  clearAll() {
    this.toppings = this.toppings.map(x => ({ ...x, checked: false }));    
    this.updateDisplayedToppings();
  }

  updateDisplayedToppings() {
    this.chosenToppings = this.toppings
      .filter(x => x.checked)
      .map(x => x.name)
      .join(', ');
  }
}
