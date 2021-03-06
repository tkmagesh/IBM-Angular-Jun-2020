import { Component } from '@angular/core';
import { CalculatorService } from  './calculatorService'

@Component({
    selector : 'app-calculator', 
    templateUrl : 'calculator.component.html',
    styleUrls : ['./calculator.component.css']
    /* template : `
        <h3>Calculator</h3>
        <hr>
        <input type="number" (change)="setN1($event.target.valueAsNumber)">
        <input type="number" (change)="setN2($event.target.valueAsNumber)">
        <br>
        <input type="button" value="Add" (click)="onAddClick()">
        <input type="button" value="Subtract" (click)="onSubtractClick()">
        <input type="button" value="Multiply" (click)="onMultiplyClick()">
        <input type="button" value="Divide" (click)="onDivideClick()">
        <div>{{result}}</div>
    ` */
})
export class CalculatorComponent{
    n1 : number = 0;
    n2 : number = 0;
    result : number = 0;
    currencySymbol = 'USD';
    currentDate : Date = new Date();

   /*  
    calculatorService : CalculatorService = null;

    constructor(_calculatorService: CalculatorService){
        this.calculatorService = _calculatorService;
    } 
    */

    constructor(private calculatorService: CalculatorService) {
        
    }

    setN1(value){
        this.n1 = value;
    }

    setN2(value){
        this.n2 = value;
    }

    onAddClick(){
        this.result = this.calculatorService.add(this.n1, this.n2);
    }
    onSubtractClick(){
        this.result = this.calculatorService.subtract(this.n1, this.n2);
    }
    onMultiplyClick(){
        this.result = this.calculatorService.multiply(this.n1, this.n2);
    }
    onDivideClick(){
        this.result = this.calculatorService.divide(this.n1, this.n2);
    }
}