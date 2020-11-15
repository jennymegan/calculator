const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
}

function updateDisplay() {
    const display = document.querySelector('.calculator-screen')
    display.value = calculator.displayValue
}

updateDisplay()

const keys = document.querySelector('#buttons')
keys.addEventListener('click', (event) => {

    const target = event.target

    if (!target.matches('button')) {
        return
    }

    if (target.classList.contains('operator')) {
        handleOperator(target.value)
        updateDisplay()
        return
    }

    if (target.classList.contains('decimal')) {
        inputDecimal(target.value)
        updateDisplay()
        return
    }

    if (target.classList.contains('clear')) {
        resetCalculator()
        updateDisplay()
        return
    }

    inputDigit(target.value)
    updateDisplay()

})


function inputDecimal(decPoint) {
    if (!calculator.displayValue.includes(decPoint)) {
        calculator.displayValue += decPoint
    }
}

function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue)
    if (firstOperand == null && !isNaN(inputValue)) {
        calculator.firstOperand = inputValue
    } else if (operator) {
        const result = calculate(firstOperand, inputValue, operator)
        calculator.displayValue = String(result)
        calculator.firstOperand = result
    }
    calculator.waitingForSecondOperand = true
    calculator.operator = nextOperator
    console.log(calculator)
}


function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;
    if (waitingForSecondOperand === true) {
        calculator.displayValue = digit
        calculator.waitingForSecondOperand = false
    } else {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit
    }
    console.log(calculator)
}


function calculate(firstOperand, secondOperand, operator) {
    if (operator === '+') {
        return firstOperand + secondOperand
    } else if (operator === '-') {
        return firstOperand - secondOperand
    } else if (operator === '*') {
        return firstOperand * secondOperand
    } else if (operator === '/') {
        return firstOperand / secondOperand
    }
    return secondOperand
}

function resetCalculator() {
    calculator.displayValue = '0'
    calculator.firstOperand = null
    calculator.waitingForSecondOperand = false
    calculator.operator = null
    console.log(calculator)
}
























//
// // add the value of the clicked button to the display screen
// document.querySelectorAll('.numerical').forEach((number) => {
//
//     if (
//         document.querySelector('#calculator').dataset.operatorpressed === '+' ||
//         document.querySelector('#calculator').dataset.operatorpressed === '-' ||
//         document.querySelector('#calculator').dataset.operatorpressed === '/' ||
//         document.querySelector('#calculator').dataset.operatorpressed === '*'
//     ) {
//         document.querySelector('#display').textContent = '0'
//         number.addEventListener('click', () => {
//             document.querySelector('#display').textContent += number.value
//         })
//
//     } else {
//         number.addEventListener('click', () => {
//             document.querySelector('#display').textContent += number.value
//         })
//     }
// })
//
//
// document.querySelector('#add').addEventListener('click', () => {
//
//     (document.querySelector('#calculator').dataset.previousvalue =
//     document.querySelector('#display').textContent)
//
//     document.querySelector('#calculator').dataset.operatorpressed = '+'
// })
//
