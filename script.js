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
    let buttons = document.getElementsByTagName('button');
    let html = document.getElementsByTagName('html')[0];

    for (let x = 0; x < buttons.length; x++) {
        buttons[x].addEventListener('click', changeColor);
    }
    function changeColor() {
        let color = this.innerText;
        html.style.background = color;
    }
})();