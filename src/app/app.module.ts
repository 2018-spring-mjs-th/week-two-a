import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { QuestionTypesService } from './question-types.service';
import { PizzaToppingsService } from './pizza-toppings.service';
import { QuestionTypeComponent } from './question-type/question-type.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionTypeComponent
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
