/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let target = document.getElementById('target');
    let newDate = new Date('March 13, 08 17:20');
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();

    if (hours >= 17 && minutes >= 30 || hours >= 18) {
        target.innerHTML = "Good evening";
    } else {
        target.innerHTML = "Hello";
    }

})();