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
function clearLastInput() {
    display.value = display.value.slice(0, -1);
}

// Function to handle keyboard input
function handleKeyPress(event) {
    const key = event.key;

    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === '.' && display.value.indexOf('.') === -1) {
        appendToDisplay(key);
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === 'Backspace') {
        clearLastInput();
    }
}

// Event listener for keyboard input
document.addEventListener('keydown', handleKeyPress);
