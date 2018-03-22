import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { QuestionTypesComponent } from './question-types/question-types.component';

import { FormsModule } from '@angular/forms';

import { QuestionTypesService } from './question-types.service';
import { PizzaToppingsService } from './pizza-toppings.service';
<<<<<<< HEAD
import { QuestionTypesComponent } from './question-types/question-types.component';
=======
>>>>>>> master
import { JpizzaComponent } from './jpizza/jpizza.component';
import { BciancioPizzaToppingsComponent } from './bciancio-pizza-toppings/bciancio-pizza-toppings.component';
import { DebertPizzaToppingsComponent} from './debert-pizza-toppings/debert-pizza-toppings.component'
import { DcasebeerPizzaToppingsComponent } from './dcasebeer-pizza-toppings/dcasebeer-pizza-toppings.component';
import { LuiiigiisPizzaPalaceComponent } from './luiiigii-pizza-palace/luiiigii-pizza-toppings.component';
import { ComponentEjutenComponent } from './component-ejuten/component-ejuten.component';
import { QliuPizzaToppingsComponent } from './qliu-pizza-toppings/qliu-pizza-toppings.component';
import { RbruinsmaPizzaToppingsComponent } from './rbruinsma-pizza-toppings/rbruinsma-pizza-toppings.component';
import { SkulasPizzaToppingComponent } from './skulas-pizza-topping/skulas-pizza-topping.component';
import { AknappPizzaToppingsComponent } from './aknapp-pizza-toppings/aknapp-pizza-toppings.component';
import { RgrittnerPizzaToppingsComponent } from './rgrittner-pizza-toppings/rgrittner-pizza-toppings.component';
import { JStoffComponentComponent } from './j-stoff-component/j-stoff-component.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionTypesComponent,
<<<<<<< HEAD
=======
    FooComponent
    ,JasontoppingsComponent
    ,AppComponent,
    QuestionTypesComponent,
    JpbongPizzaToppingsComponent,
>>>>>>> master
    JpizzaComponent,
    PizzaToppingsComponent,
    BciancioPizzaToppingsComponent,
    DebertPizzaToppingsComponent,
    DcasebeerPizzaToppingsComponent,
    LuiiigiisPizzaPalaceComponent,
    ComponentEjutenComponent,
    QliuPizzaToppingsComponent,
    RbruinsmaPizzaToppingsComponent,
    SkulasPizzaToppingComponent,
    AknappPizzaToppingsComponent,
    RgrittnerPizzaToppingsComponent,
    JStoffComponentComponent,
    PizzaToppingsComponent
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
