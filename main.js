console.log("I'm connected");
var startButton = document.querySelector("#start-button");
var guessAnswer = document.querySelector("#guess-answer");
var rightA = document.querySelector("#right");
var wrongA = document.querySelector("#wrong");
var timerA = document.querySelector("#timer");

var AnswerTrack = [];
var WrongAnswer = 0;
var totalWins = 0;
var totalLosses = 0;
var timerInterval = null;
var secondsLeft = 0;

// If user refresh page, It will pick up where left off
if(localStorage.getItem("totalWins") !== null){
    totalWins = parseInt(localStorage.getItem("totalWins") );
    rightA.innerHTML = "Right: " + totalWins;
}
if(localStorage.getItem("totalLosses") !== null){
    totalLosses = parseInt(localStorage.getItem("totalLosses") );
    wrongA.innerHTML = "wrong: " + totalLosses;
}

// User must be timed.

function setTime() {
    secondsLeft = 99;
    timerA.textContent = secondsLeft;
    //  Set interval in variable
    timerInterval = setInterval(function () {
        secondsLeft--;
        timerA.textContent = secondsLeft;
    
        if (secondsLeft === 0) {
             // stops action at set interval
            clearInterval(timerInterval);
            checkIfLost ();
        }
    }, 1000);
}

// start the quiz by clicking on start button
startButton.addEventListener("click", function (event) {
    console.log("start");
    
})



var imgTag = document.createElement("img");

imgTag.setAttribute("src", "assets/images/hoopla-is-dead.png");
imgTag.setAttribute("alt", "Start Test");

imgTag.addEventListener("click", function(){
    console.log("Maybe this will start");
});

document.body.appendChild(imgTag);