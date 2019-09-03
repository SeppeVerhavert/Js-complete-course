/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById('run').addEventListener('click', changeColor);
    let html = document.getElementsByTagName('html')[0];

    function changeColor() {
        let input = document.getElementById('color').value;
        let color = input;
        html.style.background = color;
    }
})();