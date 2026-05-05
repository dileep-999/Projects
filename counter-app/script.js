let counterValue = document.getElementById("counterValue");
function onIncrement() {
    let previousCounterValue = counterValue.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    counterValue.textContent = updatedCounterValue;
    if (updatedCounterValue > 0) {
        counterValue.style.color = "green";
    }
    else if (updatedCounterValue < 0) {
        counterValue.style.color = "red";
    }
    else {
        counterValue.style.color = "black";
    }
}
function onDecrement() {
    let previousCounterValue = counterValue.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) - 1;
    counterValue.textContent = updatedCounterValue;
    if (updatedCounterValue > 0) {
        counterValue.style.color = "green";
    }
    else if (updatedCounterValue < 0) {
        counterValue.style.color = "red";
    }
    else {
        counterValue.style.color = "black";
    }
}
function onReset() {
    let updatedCounterValue = 0;
    counterValue.textContent = updatedCounterValue;
    counterValue.style.color = "black";
}