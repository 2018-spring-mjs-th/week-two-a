import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { QuestionTypesComponent } from './question-types/question-types.component';
import { QuestionTypesService} from './question-types.service'

import { PizzaService } from './pizza-toppings.service'


@NgModule({
  declarations: [
    AppComponent,
    QuestionTypesComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
  ],
  providers: [
    QuestionTypesService
    , PizzaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
