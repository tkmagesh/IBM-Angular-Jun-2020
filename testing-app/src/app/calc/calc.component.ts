import { Component } from "@angular/core";

@Component({
    selector : 'app-calculator', 
    template : `
        <h1>Calculator</h1>
        <hr>
        <input type="number" id="txtN1" (input)="n1 = $event.target.valueAsNumber">
        <input type="number" id="txtN2" (input)="n2 = $event.target.valueAsNumber">
        <br>
        <input type="button" id="btnAdd" value="Add" (click)="onAddClick()">
        <input type="button" id="btnSubtract" value="Subtract" (click)="onSubtractClick()">
        <input type="button" id="btnMultiply" value="Multiply" (click)="onMultiplyClick()">
        <input type="button" id="btnDivide" value="Divide" (click)="onDivideClick()">
        <div id="divResult">{{result}}</div>
    `
})
export class CalculatorComponent{
    n1 : number = 0;
    n2 : number = 0;
    result : number = 0;

    onAddClick(){
        this.result = this.n1 + this.n2;
    }

    onSubtractClick() {
        this.result = this.n1 - this.n2;
    }

    onMultiplyClick() {
        this.result = this.n1 * this.n2;
    }

    onDivideClick() {
        this.result = this.n1 / this.n2;
    }
}