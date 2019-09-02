
/* becode/javascript
 *
 * /01-base/01-var-alert/script.js - 1.1: var & alert
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function askInfo() {
    let userAge = prompt("What is your age?");
    if (userAge != null) {
        let userGender = prompt("What is your gender?");
        if (userGender != null) {
            let userTown = prompt("Where do you live?");
            if (userGender != null) {
                var userInfo = confirm(" is this info correct? " + userAge + " " + userGender + " " + userTown);
                if(!userInfo) {
                    askInfo();
                }
            } else {
                askInfo();
            }
        } else {
            askInfo();
        }
    } else {
        askInfo();
    }
};

askInfo();