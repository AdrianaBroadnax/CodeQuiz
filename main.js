// console.log("I'm connected");
var startButton = document.querySelector("#start-button");
var guessWordPre = document.querySelector("#answer");
var correctP = document.querySelector("#correct");
var lossesP = document.querySelector("#incorrect");
var timerP = document.querySelector("#timer");
var multipleChoice = document.querySelector("#choice");
var questions = document.querySelector("#questionsA")
var answer = document.querySelector("#answerA")

var answerTrack = [];
var wrongAnswer = 0;
var totalCorrect = 0;
var totalIncorrect = 0;
var timerInterval = null;
var secondsLeft = 0;

// When a user refreshers or returns to the browser page
if(localStorage.getItem("totalCorrect") !== null){
    totalWins = parseInt(localStorage.getItem("totalCorrect") );
    winsP.innerHTML = "Correct: " + totalCorrect;
}
if(localStorage.getItem("totalIncorrect") !== null){
    totalLosses = parseInt(localStorage.getItem("totalIncorrect") );
    lossesP.innerHTML = "incorrect: " + totalLosses;

// the quiz will be timed.
function setTime() {
    secondsLeft = 90;
    timerP.textContent = secondsLeft;
    // Sets interval in variable
    timerInterval = setInterval(function () {
        secondsLeft--;
        timerP.textContent = secondsLeft;
        //   timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            // sendMessage();
            // * As a user, I want to lose the game when the timer runs out before I have guessed all the letters.
            checkIfLost();
        }

    }, 1000);
}
//  the questions will appear
// startButton.addEventListener("click", function (onclick) {
    document.getElementById("start-button").addEventListener("click", function() {
        document.getElementById(startButton).innerHTML = "Start";
      });
// questions are from w3schools Javascript quiz
    var questions = [
        { title: "The external JavaScript file must contain the <script> tag.",
        multipleChoice: ["True", "False"],
        answerTrack: ["False"]},
        { title: "How to write an IF statement in JavaScript?",
        multipleChoice: ["if (i == 5)", "if i = 5 then", "if i = 5", "if i == 5 then"],
        answerTrack: ["if (i == 5)"],},
        { title: "How does a FOR loop start?",
        multipleChoice: ["for (i=0; i<=5; i++)", "for i = 1 to 5", "for (i = 0; i<= 5", "for (i<= 5; i++)"],
        answerTrack: ["for (i = 0; i <=5; i++)"],}
    ]

    var found = false;
    for (var i = 0; i < answerTrack.length; i++) {
        if (!answerTrack[i].guessed) {
        found = true;
        }
    }
    if (!found) {
    // * When a user wins or loses a game, a message should appear and the timer should stop. 
        alert("You win!");
        totalCorrect++;
    // textContent
        correctP.innerHTML = "Correct: " + totalCorrect;
        clearInterval(timerInterval);
        localStorage.setItem("totalCorrect", totalCorrect);
    }
    }

    function checkIfLost() {
    var found = false;
    for (var i = 0; i < answerTrack.length; i++) {
        if (!answerTrack[i].guessed) {
        found = true;
        }
    }
    if (found) {
        alert("You lost!");
        totalIncorrect++;
        incorrectP.innerHTML = "Incorrect: " + totalIncorrect;
        localStorage.setItem("totalIncorrect", totalIncorrect);
    }
}