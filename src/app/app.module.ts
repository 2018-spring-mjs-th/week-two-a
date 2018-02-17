import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { FooComponent } from './foo/foo.component';

import { SvcService } from './svc.service';


@NgModule({
  declarations: [
    AppComponent,
    FooComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
  ],
  providers: [ SvcService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
