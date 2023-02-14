//#### LAB 4 - FUNCTIONS ####
//PART 1:  PROGRAM ALERT FUNCTION
var alertOutput = "The course code COURSECODE is COURSENAME.";

//################## CREATE YOUR FUNCTION
function coursePopup(courseCode, courseName) {
    return alert(alertOutput
        .replace("COURSECODE", courseCode).replace("COURSENAME", courseName));
}

//################## TEST YOUR FUNCTION
coursePopup("HTTP5111", "Web Development 1");
coursePopup("HTTP5114", "Workshops in Web Development 1");
coursePopup("IXD5105", "Interaction Design Studio");