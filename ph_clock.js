"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: Gabriel Fuentes 
   Date: 2.14.19  

   Filename:   ph_clock.js     

*/

//minsLeft has value of 0
var minsLeft = 0;

//Sets secsLeft to 15 value
var secsLeft = 15;

var clockID = setInterval("countDown()", 1000);

//Delcares timeLeft to global
var timeLeft = minsLeft*60 + secsLeft;

// Creates values for seconds left and minutes left
function countDown() {
    minsLeft = Math.floor(timeLeft/60);
    secsLeft = timeLeft - minsLeft*60;

    // Calls addLeadingZero to have the parameter of minsLeft declared to be minsString
    var minsString = addLeadingZero(minsLeft);

    //Calls addLeadingZero to have the parameter of secsLeft declared to be secsString
    var secsString = addLeadingZero(secsLeft);

// Sets the innerHTML of the ID of seconds to the value of minsString
document.getElementById("minutes").innerHTML = minsString;

//Sets the innerHTML of the ID of seconds to the value of SecsString
document.getElementById("seconds").innerHTML = secsString;

checkTimer();

timeLeft--;
}



/* ------------------------------------------------- */


/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */
   
function checkTimer() {
   if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
   var numStr = (num < 10) ? ("0" + num) : "" + num;
   return numStr;
}
