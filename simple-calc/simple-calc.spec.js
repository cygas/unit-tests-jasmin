describe('simple-calc.js', function() {
    it('should add numbers to total', function() {
        const calculator = new Calculator();
        calculator.add(5);

        expect(calculator.total).toBe(5);
    });

    it('should substract numbers from total', function() {
        const calculator = new Calculator();
        calculator.total = 30;
        calculator.substract(5);

        expect(calculator.total).toBe(25);
    });

    it('should multiply total by number', function() {
        const calculator = new Calculator();
        calculator.total = 3;
        calculator.multiply(5);

        expect(calculator.total).toBe(15);
    });

    it('should divide total by number', function() {
        const calculator = new Calculator();
        calculator.total = 16;
        calculator.divide(8);

        expect(calculator.total).toBe(2);
    });
});
