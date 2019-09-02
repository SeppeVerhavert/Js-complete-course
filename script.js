
/* becode/javascript
 *
 * /01-base/01-var-alert/script.js - 1.1: var & alert
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let userName = confirm("Do you want cake?");
    if (userName) {
        alert("Congratz, you made the right choice!");
    } else {
        alert("More cake for me then :p !");
    }
})();