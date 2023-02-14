//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG 
var isTempGood;
var enterTemp = "Please enter current temperature...";

var goodOutputMsg = "You’re good, have a nice walk!";
var notGoodOutputMsg = "Yikes! This is no weather for dog walking!";
var invalidInput = "Please enter valid temperature. )-:";

//################## CREATE YOUR checkTemp FUNCTION
//This function will determine the input temperature is good or not good for dog walking.
//It expects to receive current temperature as integer. 
//It will return true when temperature is between -10 to 30. Also, it validate for the input has proper data or not. 
function checkTemp(currentTemp) {
    if(currentTemp > 30 || currentTemp < -10) {
        return false;
    } else if (currentTemp <= 30 && currentTemp >= -10) {
        return true;
    }  else {
        return currentTemp;
    }
}

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
isTempGood = checkTemp(parseInt(prompt(enterTemp)));
if (isTempGood === true) {
    alert(goodOutputMsg);
} else if(isTempGood === false) {
    alert(notGoodOutputMsg);
} else {
    alert(invalidInput);
}