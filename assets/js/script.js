document.addEventListener('DOMContentLoaded', function () {
    const resultSection = document.querySelector('.result');
    const numberButtons = document.querySelectorAll('.number');
    const operationButtons = document.querySelectorAll('.operator');
    const equalButton = document.getElementById('equal');

    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            typeNumbers(button.textContent)
        });
    });
    function typeNumbers(text) {
if (resultSection.textContent.trim() === '0') {
        resultSection.textContent = text;
    } else {
        resultSection.textContent += text;
    }    };

})