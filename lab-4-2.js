//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION
var gradeHTTP5110 = 67;
var gradeHTTP5111 = 77;
var gradeHTTP5112 = 84;
var gradeHTTP5113 = 90;
var gradeIXD5106 = 70;
var average;

var successPopupMsg = "Successfully Passed! You got around #AVG%. (-:";
var reviewPopupMsg = "Review required";

//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.
function getAvg(value1, value2, value3, value4, value5) {
    var averageofTotal = (value1 + value2 + value3 + value4 + value5) / 5;
    return averageofTotal.toFixed(1);
}

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
average = getAvg(gradeHTTP5110, gradeHTTP5111, gradeHTTP5112, gradeHTTP5113, gradeIXD5106);
if (average >= 70) {
    alert(successPopupMsg.replace("#AVG", average));
} else {
    alert(reviewPopupMsg);
}