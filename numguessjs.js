var randomNum = Math.floor(Math.random() * 10) + 1;
var paragraph = document.getElementById("result-info");
var guessDisplay = document.getElementById("guess-info");
var numInput = document.getElementById("num-input");
numInput.focus();
var guessCounter = 0;

document.body.onkeydown = function(e) {
    if (e.keyCode == 13) {
        guess();
    }
}

function guess() {
    var currentGuess = numInput.value;
    guessCounter++;
    guessDisplay.innerHTML = "Guesses: " + guessCounter;
    if (currentGuess > randomNum) {
        paragraph.innerHTML = "You guessed above the number";
    }
    else if (currentGuess == randomNum) {
        paragraph.innerHTML = "Congratulations! You guessed correct!";
    }
    else if (currentGuess < randomNum) {
        paragraph.innerHTML = "You guessed below the number";
    }
    else {
        paragraph.innerHTML = "Your input didn't make any sense";
    }
}