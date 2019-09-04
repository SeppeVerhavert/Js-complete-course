/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById('run').addEventListener('click', calculateFriday);

    function calculateFriday() {
        let yearInput = document.getElementById('year').value;
        let spookyFridays = [];
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        for (let i = 0; i < months.length; i++) {
            let newDate = new Date( months[i] + '13, ' + yearInput +  ' 00:00:00');
            let newDay = newDate.getDay();
            if (newDay === 5) {
                spookyFridays.push(newDate);
            }
        }
        alert(spookyFridays);
    }
})();