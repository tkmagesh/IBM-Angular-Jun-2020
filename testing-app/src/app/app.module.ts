import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent} from './calc/calc.component';

@NgModule({
  declarations: [
    AppComponent
    , CalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, CalculatorComponent]
})
export class AppModule { }
