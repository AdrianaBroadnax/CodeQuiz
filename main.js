console.log("I'm connected");
var startButton = document.querySelector("#start-button");
var guessWordPre = document.querySelector("#answer");
var winsP = document.querySelector("#correct");
var lossesP = document.querySelector("#incorrect");
var timerP = document.querySelector("#timer");

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
startButton.addEventListener("click", function (event) {
    // console.log("start");
    // var listOfRandomWords = ["cardi b", "jaylen hurtz", "jay z", "denzel washington"]
    // var computerWord = listOfRandomWords[Math.floor(Math.random() * listOfRandomWords.length)]; 
    console.log("start");
    var questionText = ""

    var letters = computerWord.split("");
    letterTrack = [];
    for (var i = 0; i < letters.length; i++) {
        if (letters[i] === " ") {
            letterTrack.push({ letter: letters[i], guessed: true });
        }
        else {
            letterTrack.push({ letter: letters[i], guessed: false });
        }
    }

    console.log(letterTrack);
    renderLetters();

var imgTag = document.createElement("img");

imgTag.setAttribute("src", "assets/images/hoopla-is-dead.png");
imgTag.setAttribute("alt", "Start Test");

imgTag.addEventListener("click", function(){
    console.log("Maybe this will start");
});

document.body.appendChild(imgTag);