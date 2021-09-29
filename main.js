console.log("I'm connected");
var startButton = document.querySelector("#start-button");
var guessAnswer = document.querySelector("#guess-answer");
var correctA = document.querySelector("#correct");
var incorrectA = document.querySelector("#incorrect");
var timerA = document.querySelector("#timer");
var container = document.querySelector(".container")

var AnswerTrack = [];
var WrongAnswer = 0;
var totalWins = 0;
var totalLosses = 0;
var timerInterval = null;
var secondsLeft = 0;

// If user refresh page, It will pick up where left off
if(localStorage.getItem("totalWins") !== null){
    totalWins = parseInt(localStorage.getItem("totalWins") );
    correctA.innerHTML = "correct: " + totalWins;
}
if(localStorage.getItem("totalLosses") !== null){
    totalLosses = parseInt(localStorage.getItem("totalLosses") );
    incorrectA.innerHTML = "incorrect: " + totalLosses;
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
// click on the answer
container.addEventListener("click", function(event) {
    var element = event.target;

    if(element.matches(".box")) {
        var state = element.setAttribute("data-answer");
        alert("correct!")
    }

})



var imgTag = document.createElement("img");

imgTag.setAttribute("src", "assets/images/hoopla-is-dead.png");
imgTag.setAttribute("alt", "Start Test");

imgTag.addEventListener("click", function(){
    console.log("Maybe this will start");
});

document.body.appendChild(imgTag);