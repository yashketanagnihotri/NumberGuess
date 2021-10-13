let userGuess = document.querySelector(".guess"),
  guessArray = [],
  message = document.querySelector(".message");
let score = document.querySelector(".score");
let checkButton = document.querySelector(".check");
let randomNumber = Math.ceil(Math.random() * 20);
let totalScore = 20;
let highScore = 0;
function gameLogic() {
  if (Number(userGuess.value) == randomNumber) {
    message.textContent = "You Have Got It";
    if (totalScore > highScore) {
      highScore = totalScore;
    }
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector(".number").style.width = "25rem";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".highscore").textContent = highScore;
  } else {
    totalScore--;
    if (Number(userGuess.value) > randomNumber) {
      message.textContent = "Too High";
    } else {
      message.textContent = "Too Low";
    }
  }
  if (totalScore <= 0) {
    totalScore = 0;
    document.querySelector("body").style.backgroundColor = "red";
    message.textContent = "You Loose...";
  }
  if (
    !Number(userGuess.value) ||
    Number(userGuess.value) > 20 ||
    Number(userGuess.value) < 1
  ) {
    message.textContent = "Invalid Input...";
  } else {
    guessArray.push(Number(userGuess.value));
    score.textContent = totalScore;
  }
}
checkButton.addEventListener("click", gameLogic);

const again = document.querySelector(".again");
again.addEventListener("click", function () {
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  score.textContent = 20;
  message.textContent = "Start Guessing...";
  randomNumber = Math.ceil(Math.random() * 20);
  userGuess.value = " ";
  totalScore = 20;
});
