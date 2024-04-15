// Get the display element
const display = document.getElementById('display');

// appendToDisplay function
function appendToDisplay(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Evaluate the expression
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
// Clear last input

function clearLastInput(value) {
    display.value = display.value.slice(0, -1);
}
