let currentInput = '';

function back() { 
    currentInput = currentInput.slice(0, currentInput.length - 1);
    updateDisplay();
}

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput === '') return;
    const lastChar = currentInput[currentInput.length - 1];
    if ('+-*/%'.includes(lastChar)) {
        currentInput = currentInput.slice(0, -1);
    }
    currentInput += operator;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(currentInput.replace(/%/g, '/100'));
        currentInput = result.toString();
    } catch (error) {
        currentInput = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementsByClassName('screen')[0].innerText = currentInput || '0';
}