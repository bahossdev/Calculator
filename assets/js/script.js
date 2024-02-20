document.addEventListener('DOMContentLoaded', function () {
    const resultSection = document.querySelector('.result');
    const numberButtons = document.querySelectorAll('.number');
    const operationButtons = document.querySelectorAll('.operator');
    const equalButton = document.getElementById('equal');
    const clearButton = document.getElementById('clear');
    let resultDisplayed = false;

    //handleing the numbers
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (resultDisplayed) {
                resultSection.textContent = '';
                resultDisplayed = false;
            }
            display(button.textContent);
        });
    });

    //handelign the operators
    operationButtons.forEach(button => {
        button.addEventListener('click', () => {
            display(button.textContent);
        });
    });

    //display numbers/operators
    function display(text) {
        if (resultSection.textContent.trim() === '0' || resultDisplayed) {
            resultSection.textContent = text;
            resultDisplayed = false;
        } else {
            resultSection.textContent += text;
        }
    };

    //handling the equal button
    equalButton.addEventListener('click', calculateResult);

    function calculateResult() {
        try {
            let expression = resultSection.textContent
                .replace(/%/g, '*0.01')
                .replace(/×/g, '*')
                .replace(/÷/g, '/');
            const result = eval(expression);
            resultSection.textContent = result;
            resultDisplayed = true;
        } catch (error) {
            resultSection.textContent = 'Error';
        }
    }

    //handling the clear button
    clearButton.addEventListener('click', () => {
        resultSection.textContent = '0';
        resultDisplayed = false;
    })
})