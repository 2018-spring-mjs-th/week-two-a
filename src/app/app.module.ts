import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { FooComponent } from './foo/foo.component';

import { SvcService } from './svc.service';
import { ChooseQuestionTypesComponent } from './choose-question-types/choose-question-types.component';
import { QuestionTypesService } from './question-types.service';


@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    ChooseQuestionTypesComponent,
  ],
  imports: [
    BrowserModule
    , FormsModule
  ],
  providers: [ SvcService, QuestionTypesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
