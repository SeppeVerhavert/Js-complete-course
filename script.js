
/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("run").addEventListener("click", function () {
        let numberInput = parseInt(document.getElementById("number").value);
        let solution = 1;

        if (numberInput == 0) {
            alert(solution);
        } else {
            for (let i = numberInput; i > 0; i--) {
                solution = solution * i;
            }
            alert(solution);
        }
    });
})();