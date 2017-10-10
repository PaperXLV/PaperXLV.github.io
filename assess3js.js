var checkbox = document.getElementById("show-pass");
var submit = document.getElementById("submit");
var passField = document.getElementById("pass-field");
var trials = 0;

function checkBoxing() {
    var string = document.getElementById("inner").value;
    if (checkbox.checked) {
        passField.innerHTML = "<input type=text id='inner'></input>";
        document.getElementById("inner").value = string;
    }
    else {
        passField.innerHTML = "<input type=password id='inner'></input>";
        document.getElementById("inner").value = string;
    }
}

function checkInput() {
    var attempt = document.getElementById("inner").value;
    if (attempt == "ilovekarl") {
        document.getElementById("body").innerHTML = "<h1>Logged in successfully!</h1>";
    }
    else {
        trials++;
        document.getElementById("failure-message").innerHTML = "Incorrect Password<br>" + trials + " tries";
    }
}

document.getElementById("inner").value = "";

checkBoxing();