// Displays user's expression
function display(value) {
    // "output" -changes content within cell with id="output"
    // .value -receives value from display(value)
    document.getElementById("output").value += value;
}

// Clears expression
function clearExpression() {
    document.getElementById("output").value = " ";
}

// Calculates expression
function calculate() {
    // eval(inputted expression)
    var x = eval(document.getElementById("output").value);
    // Outputs result to user
    document.getElementById("output").value = x;
}