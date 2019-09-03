/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    let operators = document.getElementsByClassName('operator');
    let output = document.getElementsByClassName('explain')[0];
    let firstOperator = parseInt(document.getElementById("op-one").value);
    let secondOperator = parseInt(document.getElementById("op-two").value);
    let solution;

    for (let x = 0; x < operators.length; x++) {
        operators[x].addEventListener('click', checkId);
    }

    function checkId() {
        switch (this.id) {
            case "addition":
                solution = firstOperator + secondOperator;
                output.innerHTML = solution;
                break;
            case "substraction":
                solution = firstOperator - secondOperator;
                output.innerHTML = solution;
                break;
            case "multiplication":
                solution = firstOperator * secondOperator;
                output.innerHTML = solution;
                break;
            case "division":
                solution = firstOperator / secondOperator;
                output.innerHTML = solution;
                break;
        }
    }
})();