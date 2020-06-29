import { TestBed, async } from '@angular/core/testing';
import { CalculatorComponent } from './calc.component';

describe('CalculatorComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CalculatorComponent
            ],
        }).compileComponents();
    }));

    it('should create the calculator', () => {
        const fixture = TestBed.createComponent(CalculatorComponent);
        const calculator = fixture.componentInstance;
        expect(calculator).toBeTruthy();
    });

    it('should initialise n1 to 0', () => {
        const fixture = TestBed.createComponent(CalculatorComponent);
        const calculator = fixture.componentInstance;
        expect(calculator.n1).toBe(0);
    });

    it('should initialise n2 to 0', () => {
        const fixture = TestBed.createComponent(CalculatorComponent);
        const calculator = fixture.componentInstance;
        expect(calculator.n2).toBe(0);
    });

    it('should add n1 and n2 on onAddClick', () => {
        const fixture = TestBed.createComponent(CalculatorComponent);
        const calculator = fixture.componentInstance;
        calculator.n1 = 100;
        calculator.n2 = 200;
        calculator.onAddClick();
        expect(calculator.result).toBe(300);
    });

    it('should add textbox values on Add button click', async () => {
        const fixture = TestBed.createComponent(CalculatorComponent);
        fixture.detectChanges();
        const calculator = fixture.componentInstance;
        fixture.debugElement.nativeElement.querySelector('#txtN1').value = 100;
        fixture.debugElement.nativeElement.querySelector('#txtN2').value = 200;
        fixture.debugElement.nativeElement.querySelector('#btnAdd').click();
        fixture.detectChanges();
        const resultValue = fixture.debugElement.nativeElement.querySelector('#divResult').innerText;
        expect(resultValue).toBe('300');

    });

})