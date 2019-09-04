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
    
    document.getElementById('run').addEventListener('click', calculateAge);

    function calculateAge() {
        let yearInput = document.getElementById('dob-year').value;
        let monthInput = document.getElementById('dob-month').value;
        let dayInput = document.getElementById('dob-day').value;
        let dateInput = new Date(monthInput  + ' ' + dayInput + ',' + yearInput + ' ' + '00:00');
        
        let date = new Date();
        let newYear = new Date(date - dateInput);
        let yearTotal = newYear.getFullYear() - 1970;
        
        alert(yearTotal);
    }

})();