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
    let numbersInput = document.getElementById("numbers").value;
    document.getElementById("run").addEventListener('click', sortNumbers);
    let array = [];
    let sortedArray = [];

    function sortNumbers() {
        array = numbersInput.split(", ");
        for (let i = 0; i < array.length; i++) {
            let numberMin = 100;
            for (let x = 0; x < array.length; x++) {
                if (parseInt(array[x]) < numberMin) {
                    numberMin = array[x];
                }
            }
            sortedArray[i] = parseInt(numberMin);
            let minIndex = array.indexOf(numberMin);
            array[minIndex] = "";
        }
        alert(sortedArray);
    }
})();