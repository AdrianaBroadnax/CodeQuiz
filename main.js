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
var secLeft = 0;
// When a user refreshers or returns to the browser page
if(localStorage.getItem("totalCorrect") !== null){
    totalWins = parseInt(localStorage.getItem("totalCorrect") );
    winsP.innerHTML = "Correct: " + totalCorrect;
}
if(localStorage.getItem("totalIncorrect") !== null){
    totalLosses = parseInt(localStorage.getItem("totalIncorrect") );
    lossesP.innerHTML = "incorrect: " + totalLosses;

var imgTag = document.createElement("img");

imgTag.setAttribute("src", "assets/images/hoopla-is-dead.png");
imgTag.setAttribute("alt", "Start Test");

imgTag.addEventListener("click", function(){
    console.log("Maybe this will start");
});

document.body.appendChild(imgTag);