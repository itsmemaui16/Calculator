const display = document.getElementById('display');

function appendValue(value) {
    const lastChar = display.value.slice(-1);
    if(value === '.' && lastChar === '.') return;
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
        setTimeout(() => display.value = '', 1000);
    }
}
