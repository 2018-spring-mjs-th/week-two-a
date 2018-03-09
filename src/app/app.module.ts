import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { QuestionTypesService } from './question-types.service';
import { PizzaToppingsService } from './pizza-toppings.service';
import { QuestionTypesComponent } from './question-types/question-types.component';
<<<<<<< HEAD
import { RbruinsmaPizzaToppingsComponent } from './rbruinsma-pizza-toppings/rbruinsma-pizza-toppings.component';
=======
import { RgrittnerPizzaToppingsComponent } from './rgrittner-pizza-toppings/rgrittner-pizza-toppings.component';
import { JStoffComponentComponent } from './j-stoff-component/j-stoff-component.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';
>>>>>>> master


@NgModule({
  declarations: [
    AppComponent,
    QuestionTypesComponent,
<<<<<<< HEAD
    RbruinsmaPizzaToppingsComponent
=======
    RgrittnerPizzaToppingsComponent,
    JStoffComponentComponent,
    PizzaToppingsComponent
>>>>>>> master
  ],
  imports: [
    BrowserModule
    , FormsModule
  ],
  providers: [
    QuestionTypesService
    , PizzaToppingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
