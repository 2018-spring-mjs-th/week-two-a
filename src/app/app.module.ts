import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { QuestionTypesService } from './question-types.service';
import { PizzaToppingsService } from './pizza-toppings.service';
import { QuestionTypesComponent } from './question-types/question-types.component';
import { SomernikPizzaToppingsComponent } from './somernik-pizza-toppings/somernik-pizza-toppings.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionTypesComponent,
    SomernikPizzaToppingsComponent
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
