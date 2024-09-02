

let currentInput = '';
let operator = '';
let operand1 = null;

function appendNumber(number) {
    if (currentInput === '0' && number !== '.') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === '') return;
    
    if (operand1 === null) {
        operand1 = parseFloat(currentInput);
    } else if (operator) {
        operand1 = operate(operator, operand1, parseFloat(currentInput));
    }

    operator = op;
    currentInput = '';
    updateDisplay();
}

function calculateResult() {
    if (operator && currentInput !== '') {
        const result = operate(operator, operand1, parseFloat(currentInput));
        currentInput = result.toString();
        operand1 = null;
        operator = '';
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    operand1 = null;
    updateDisplay();
}

function operate(op, a, b) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return b;
    }
}

function updateDisplay() {
    document.getElementById('display').textContent = currentInput || '0';
}
