/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById('run').addEventListener('click', generateStatistics);

    let newArray = [];
    function generateStatistics(){
        generateArray();
        getStatistics();
    }

    function generateArray(){
        newArray = [];
        for(let x=0;x<10;x++){
            let newNumber = Math.floor(Math.random()*100)
            newArray.push(newNumber);
            document.getElementById("n-"+(x+1)).innerHTML = newNumber;
        }
        console.log(newArray);
    }

    function getStatistics(){
        smallNumber();
        bigNumber();
        sumOfNumbers();
        averageOfNumbers();
    }

    function smallNumber(){
        let smallest = Math.min(...newArray);
        document.getElementById("min").innerHTML = smallest;
    }

    function bigNumber(){
        let largest = Math.max(...newArray);
        document.getElementById("max").innerHTML = largest;
    }

    function sumOfNumbers(){
        let sum = newArray.reduce((a,b) => a+b);
        document.getElementById("sum").innerHTML = sum;
    }

    function averageOfNumbers(){
        let avg = Math.floor(newArray.reduce((a,b) => a+b)/newArray.length);
        document.getElementById("average").innerHTML = avg;
    }
})();