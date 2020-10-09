const inputBox = document.getElementById("screen");
const actionInputs = ['(', ')', '+', '-', '/', '*', '%'];
let isActionInput = false;
let inNumberIncludePoint = false;
let invalidExpression = false;
function buttonClick(val) {
    if (invalidExpression) {
        inputBox.value = '';
        invalidExpression = false;
    }
    if (actionInputs.includes(val)) {
        if (!isActionInput) {
            inputBox.value += val;
            isActionInput = true;
        } else {
            inputBox.value = inputBox.value.replace(/.$/, val);
        }
        inNumberIncludePoint = false;
    } else if (val === '.') {
        if (!inNumberIncludePoint) {
            inputBox.value += val;
            inNumberIncludePoint = true;
        }
        isActionInput = false;
    } else {
        inputBox.value += val;
        isActionInput = false;
    }
}
function clearDisplay(){
    inputBox.value = "";
}
function equalClick() {
    try {
        inputBox.value = eval(inputBox.value);
    }
    catch (err) {
        invalidExpression = true;
        inputBox.value = 'Invalid expression !';
    }
}
