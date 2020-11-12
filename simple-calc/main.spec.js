describe('main.js', function() {
    describe('calculate()', function() {
        it('validates expression', function() {
            
        });

        xit('calls add');
        xit('calls substract');
        xit('calls multiply');
        xit('calls divide');
        xit('validates operation ');
        xit('calls updateResult');
    });

    describe('updateResult()', function() {
        beforeAll(function() {
            const element = document.createElement('div');
            element.setAttribute('id', 'result');

            document.body.appendChild(element);
            this.element = element;
        });

        afterAll(function() {
            document.body.removeChild(this.element);
        });

        it('adds result to DOM element', function() {            
            updateResult('5');

            expect(this.element.innerText).toBe('5');
        });
    });
});