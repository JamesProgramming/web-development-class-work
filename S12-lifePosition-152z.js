// load background colors for the unordered list li elements
var ballColors = ["#EBB5B5", "#D4D4FB", "#C1E1A1", "#C1A2A2", "#F89E6A", "#EE6464", "#AFD2FF"];
// find all the li elements in ul element and store as array in listElement
var listElement = document.querySelectorAll("ul li");
for (var i = 0; i < ballColors.length; i++) {
    // set background color for the li balls
    listElement[i].style.backgroundColor = ballColors[i];
}

// get input box "ageHolder" 
var ageValue = document.getElementById("ageHolder");
var strLength;
// when text is entered into the box, function is set off by the .oninput event
ageValue.oninput = function() {
    // get the length of the current input text
    strLength = this.value.split("").length - 1;
    // check if value entered is not a number or a space
    if (isNaN(ageValue.value) || ageValue.value.substr(-1, 1) === " ") {
        // get length of input string and reduce it by one
        this.value = this.value.substr(0, strLength);
    } else if (strLength > 3 ) {
        // restrict the length of the input string to 4 digits
        this.value = this.value.substr(0, strLength);
    }
}

// set off when "find out" button clicked
function findLifePosition(xform) {
    // name entered in usrName box
    var theirName = xform.usrName.value;
    // age entered in usrAge box
    var theirAge = xform.usrAge.value;
    // background color of output text
    var theBackgrounds = "";
    // start of message to display
    var msg = "Hay <u>" + theirName + "</u>, ";
    // check if they entered a name
    if (theirName == '') {
        msg = "Hay, where's your name";
    // check if they entered an age
    } else if (theirAge == "") {
        msg = "Hay, what's your age";
    } else {
        /* find their life position and set background color
         to background color of its' corresponding li element ball.
         Call the findMessage() function to get the messsge created for their age group */
        if (theirAge < 1) {
            msg += findMessage("0");
            theBackgrounds = ballColors[0];
        } else if (theirAge < 10) {
            msg += findMessage("1");
            theBackgrounds = ballColors[1];
        } else if (theirAge < 13) {
            msg += findMessage("2");
            theBackgrounds = ballColors[2];
        } else if (theirAge < 20) {
            msg += findMessage("3");
            theBackgrounds = ballColors[3];
        } else if (theirAge < 30) {
            msg += findMessage("4");
            theBackgrounds = ballColors[4];
        } else if (theirAge < 55) {
            msg += findMessage("5");
            theBackgrounds = ballColors[5];
        } else {
            msg += findMessage("6");
            theBackgrounds = ballColors[6];
        }
    }
    // display message and place the background color in inline style
    document.getElementById("returnValue").innerHTML = "<p style='background-color:" + theBackgrounds + "'>" + msg + "</p>";
}

// array containing the last half of the message to display to user depending on their age group
var messsageArray = ["you're a <u>Baby</u>! how did you ever manage to fill in this form!",
                    "you're a <u>Kid</u>. Just started school. Make good friends. Enjoy your free time.",
                    "you're a <u>Tween</u>. Now you are figuring out that life doesn't get easier.",
                    "you're a <u>Teenager</u>. Do your homework and stay out of trouble.",
                    "you're a <u>Young Adult</u>. It’s time to get a good job and find your life partner.",
                    "you're a <u>Adult</u>. Keep working. Stay faithful.",
                    "you're a <u>Senior</u>. Now it's time to enjoy your grandchildren and relax."];

/* return the message for their age group and call makeBallLarge() 
    function to make the li element with their age group larger.*/
function findMessage(index) {
    makeBallLarge(index);
    return messsageArray[index];
}

// set to empty string
var theId = "";
/* make the li element with users age group name larger.
    Shrink the last li element made larger by this function. */ 
function makeBallLarge(index) {
    /* This will evaluate false the first time and then true 
        because it will have the element Id of the last li element enlarged. */
    if (theId) {
        // set the last li element made larger back to its' origonal size and z-index.
        document.getElementById(theId).style.transform = "scale(1)";
        document.getElementById(theId).style.zIndex = "auto";
        document.getElementById(theId).style.boxShadow = "none";
    }
    // make index value one larger so it will match the id of the user age group li element
    index = Number(index) + 1;
    // form id of the age group li element
    theId = "ball" + index;
    // make the li element larger, place in front, and put a box shadow on it 
    document.getElementById(theId).style.transform = "scale(1.5)";
    document.getElementById(theId).style.zIndex = "2";
    document.getElementById(theId).style.boxShadow = "#444444 0px 0px 3px";
}
