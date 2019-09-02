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
    let firstOperator = parseInt(document.getElementById("op-one").value);
    let secondOperator = parseInt(document.getElementById("op-two").value);
    let output = document.getElementsByClassName('explain')[0];
    let solution;

    document.getElementById("addition").addEventListener("click", function () {
        solution = firstOperator + secondOperator;
        output.innerHTML = solution;
    });

    document.getElementById("substraction").addEventListener("click", function () {
        solution = firstOperator - secondOperator;
        output.innerHTML = solution;
    });

    document.getElementById("multiplication").addEventListener("click", function () {
        solution = firstOperator * secondOperator;
        output.innerHTML = solution;
    });

    document.getElementById("division").addEventListener("click", function () {
        solution = firstOperator / secondOperator;
        output.innerHTML = solution;
    });
})();