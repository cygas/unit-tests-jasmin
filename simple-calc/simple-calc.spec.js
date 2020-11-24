describe('simple-calc.js', function() {
    describe('Calculator', function() {
        beforeEach(function() {
            this.calculator = new Calculator();
            this.calculator2 = new Calculator();
        });

        afterEach(function() {
            
        });

        it('should initializa the total', function() {
            expect(this.calculator.total).toBe(0);
        });
    
        it('can be instantiated', function() {
            jasmine.addMatchers(customMatchers);

            expect(this.calculator).toBeCalculator();
    
            expect(this.calculator).toBeTruthy();
            expect(this.calculator2).toBeTruthy();
            expect(this.calculator).toEqual(this.calculator2);
            expect(this.calculator.constructor.name).toContain('Calc');
        });
    
        it('instantiates unique object', function() {    
            expect(this.calculator).not.toBe(this.calculator2);
        });
    
        it('has common operations', function() {    
            expect(this.calculator.add).toBeDefined();
            expect(this.calculator.substract).not.toBeUndefined();
            expect(this.calculator.multiply).not.toBeUndefined();
            expect(this.calculator.divide).not.toBeUndefined();
        });
    
        it('can overwrite total', function() {
            this.calculator.total = null;
    
            expect(this.calculator.total).toBeNull();
        });

        describe('add()', function() {
            it('should add numbers to total', function() {
                this.calculator.add(5);
        
                expect(this.calculator.total).toBe(5);
            });

            it('returns total', function() {
                this.calculator.total = 50;
        
                expect(this.calculator.add(-200)).toBe(-150);
                expect(this.calculator.total).toMatch(/-?\d+/);
                expect(this.calculator.total).toBeNumber();
                expect(typeof this.calculator.total).toMatch('number');
        
                expect(this.calculator.total).toEqual(jasmine.anything());
            });
        });

        describe('substract()', function() {
            it('should substract numbers from total', function() {
                this.calculator.total = 30;
                this.calculator.substract(5);
        
                expect(this.calculator.total).toBe(25);
            });
        });

        describe('multiply()', function() {
            it('should multiply total by number', function() {
                this.calculator.total = 3;
                this.calculator.multiply(5);
        
                expect(this.calculator.total).toBe(15);
            });

            it('does not handle NaN', function() {
                this.calculator.total = 20;
                this.calculator.multiply('a');
        
                expect(this.calculator.total).toBeNaN();
            });
        });

        describe('divide()', function() {
            it('should divide total by number', function() {
                this.calculator.total = 16;
                this.calculator.divide(8);
        
                expect(this.calculator.total).toBe(2);
            });

            it('handles divide by zero', function() {        
                expect(() => this.calculator.divide(0)).toThrow();
                expect(() => this.calculator.divide(0)).toThrowError(Error);
                expect(() => this.calculator.divide(0)).toThrowError(Error, 'cannot divide by zero');
            });
        });
        
        describe('get version', function() {
            it('fetches version from external source', function(done) {
                spyOn(window, 'fetch').and.returnValue(Promise.resolve(
                    new Response('{ "version": "0.1" }')
                ));

                this.calculator.version.then(function(version) {
                    expect(version).toBe('0.1');

                    done();
                });
            });
        });
    });
});
