// HEADER ENTER ALERT
function enter_alert() {
    alert("Right now is not posible to enter, try later please.");
}

// CLIENTS PICS AND STATEMENT

function client1() {
    document.getElementById("client_pic1").style.borderColor = "goldenrod";
    document.getElementById("client_pic1").style.scale = "(0.8,0.8)";

    document.getElementById("client_pic2").style.borderColor = "white";
    document.getElementById("client_pic3").style.borderColor = "white";

    document.getElementById("client_comment").innerHTML =
        "Never forget what you are, the rest of the world will not. Wear it like armor and it can never be used to hurt you.";

    document.getElementById("client_name").innerHTML = "tyrion lannister";

    document.getElementById("client_title").innerHTML = "lord of casterly rock";

    document.getElementById("client_circle1").style.backgroundColor = "goldenrod";
    document.getElementById("client_circle2").style.backgroundColor = "#999";
    document.getElementById("client_circle3").style.backgroundColor = "#999";
}

function client2() {
    document.getElementById("client_pic1").style.borderColor = "white";
    document.getElementById("client_pic2").style.borderColor = "goldenrod";
    document.getElementById("client_pic3").style.borderColor = "white";

    document.getElementById("client_comment").innerHTML =
        "And I do not need your permission to defend the North. We will begin training every man, woman, boy and girl on Bear Island.";

    document.getElementById("client_name").innerHTML = "lyanna mormont";

    document.getElementById("client_title").innerHTML = "lady of bear island";

    document.getElementById("client_circle1").style.backgroundColor = "#999";
    document.getElementById("client_circle2").style.backgroundColor = "goldenrod";
    document.getElementById("client_circle3").style.backgroundColor = "#999";
}

function client3() {
    document.getElementById("client_pic1").style.borderColor = "white";
    document.getElementById("client_pic2").style.borderColor = "white";
    document.getElementById("client_pic3").style.borderColor = "goldenrod";

    document.getElementById("client_comment").innerHTML =
        "I am Daenerys Stormborn of House Targaryen!. I am the dragon's daughter, and I swear to you that those who would harm you will die screaming!";

    document.getElementById("client_name").innerHTML = "daenerys targaryen";

    document.getElementById("client_title").innerHTML = "breaker of chains";

    document.getElementById("client_circle1").style.backgroundColor = "#999";
    document.getElementById("client_circle2").style.backgroundColor = "#999";
    document.getElementById("client_circle3").style.backgroundColor = "goldenrod";
}

// EDITABLE CONTENT
function Function_yes() {
    document.getElementById("editable").contentEditable = true;
    document.getElementById("explanation").innerHTML =
        "The notes field is now editable. Try to change its text.";
}

function Function_no() {
    document.getElementById("editable").contentEditable = false;
    document.getElementById("explanation").innerHTML =
        "The notes field is not editable anymore. Try to change its text to see you can't";
}

// SMOOTH SCROLL AND ARROW BEHAVIOUR
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {
        document.getElementById("arrowUp").style.display = "block";
    } else {
        document.getElementById("arrowUp").style.display = "none";
    }
}
//i would like to add a transition fadein/fade out for the arrowUp.
//wip !

function arrowUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}