function calculate(inputVal) {
    const expression = /\+|\-|\*|\//;
    const numbers = inputVal.split(expression);
    const numberA = Number(numbers[0]);
    const numberB = Number(numbers[1]);

    const operation = inputVal.match(expression);

    if (Number.isNaN(numberA) || Number.isNaN(numberB) || operation === null) {
        updateResult('operation not recognized');
        return;
    }

    const calculator = new Calculator();
    calculator.add(numberA);

    let result;

    switch(operation[0]) {
        case '+':
            result = calculator.add(numberB);
            break;
        case '-':
            result = calculator.substract(numberB);
            break;
        case '*':
            result = calculator.multiply(numberB);
            break;
        case '/':
            result = calculator.divide(numberB);
            break;
    }

    updateResult(result);
}

function updateResult(result) {
    let el = document.getElementById('result');

    if (el) {
        el.innerText = result;
    }
}

function showVersion() {
    const calculator = new Calculator();
    const el = document.getElementById('version');

    calculator.version
        .then(version => el.innerText = version);
}