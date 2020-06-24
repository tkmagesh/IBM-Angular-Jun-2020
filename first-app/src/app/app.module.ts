import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ProductsComponent } from './products/products.component';

import { CalculatorService } from './calculator/calculatorService'
/* 
  declarations - register all the UI entities of the application (Components, Pipes, Directives)
  providers - register the NON-UI entities of the application ( services )
  imports - register the other Angular modules that this module depends on
  bootstrap - top level components in the app (index.html)

*/
@NgModule({
  declarations: [
    AppComponent
    , CalculatorComponent
    , ProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CalculatorService
  ],
  bootstrap: [
    /* AppComponent, */
    ProductsComponent,
    CalculatorComponent
  ]
})
export class AppModule { }
