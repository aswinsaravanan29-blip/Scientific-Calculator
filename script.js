const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function square() {
    if (display.value === "") return;
    display.value = Math.pow(Number(display.value), 2);
}

function squareRoot() {
    if (display.value === "") return;
    display.value = Math.sqrt(Number(display.value));
}

function power() {
    let exponent = prompt("Enter power:");
    if (exponent !== null && exponent !== "") {
        display.value = Math.pow(Number(display.value), Number(exponent));
    }
}

function factorial() {
    let n = Number(display.value);

    if (n < 0 || !Number.isInteger(n)) {
        display.value = "Error";
        return;
    }

    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    display.value = result;
}

function sin() {
    display.value = Math.sin(Number(display.value) * Math.PI / 180);
}

function cos() {
    display.value = Math.cos(Number(display.value) * Math.PI / 180);
}

function tan() {
    display.value = Math.tan(Number(display.value) * Math.PI / 180);
}

function log() {
    display.value = Math.log10(Number(display.value));
}

function ln() {
    display.value = Math.log(Number(display.value));
}