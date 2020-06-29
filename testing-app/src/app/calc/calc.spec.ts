import { Calculator } from './calc';

describe('Calculator', () => {
    let sut : Calculator = null;

    beforeEach(() => {
        sut = new Calculator();
    });

    it('Should add 2 numbers', () => {
        //Arrange
        const x = 100,
            y = 200,
            expectedResult = 300;
        
        //Act
        const actualResult = sut.add(x,y);

        //Assert
        expect(actualResult).toBe(expectedResult);
    });

    it('Should subtract 2 numbers', () => {
        //Arrange
        const x = 100,
            y = 200,
            expectedResult = -100;

        //Act
        const actualResult = sut.subtract(x, y);

        //Assert
        expect(actualResult).toBe(expectedResult);
    });

})