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
    document.getElementById("run").addEventListener('click', calculateEven);

    function calculateEven() {
        for (let x = 0; x < 22; x++) {
            if (x % 2 == 0) {
                alert(x);
            }
        }
    }
})();