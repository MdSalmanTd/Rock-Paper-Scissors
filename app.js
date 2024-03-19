let userScore = 0;
let comScore = 0;

const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#com-score");
const resetAll = document.querySelector(".reset-container");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const showWinner = (userWin) => {
  if (userWin) {
    userScore++
    userScorePara.innerText = userScore;
    msg.innerText = "You Win";
    msg.style.borderColor = "green";
  } else {
    comScore++
    comScorePara.innerText = comScore;
    msg.innerText = "You lose";
    msg.style.borderColor = "red";
  }
};

const genComChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const ranIndex = Math.floor(Math.random() * 3);
  return options[ranIndex];
};

const playGame = (userChoice) => {
  const comChoice = genComChoice();
  if (userChoice === comChoice) {
    msg.innerText = "Game was a draw!";
    msg.style.borderColor = "rgb(29, 29, 29)";
  } else {
    let userWin = true;
    if(userChoice === "rock")
    userWin = comChoice === "paper" ? false : true;
    else if (userChoice === "paper") {
      userWin = comChoice === "scissors" ? false : true;
    } else {
      userWin = comChoice === "rock" ? false : true;
    }
    showWinner (userWin);
  }

};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
     playGame(userChoice);
     whoWon();
  })
});

function whoWon() {
  if (userScore >= 11){
    alert("You are having a goodluck");
    resetScore();
  } else if (comScore >= 11){
    alert("Hehehe Robot will rule the earth Human!");
    resetScore();
  }
  
};

function resetScore() {
  userScore = 0;
  userScorePara.innerText = userScore;
  comScore = 0;
  comScorePara.innerText = userScore;
  msg.innerText = "Pick a Move";
  msg.style.borderColor = "rgb(29, 29, 29)";
};

resetAll.addEventListener("click", () =>{
  resetScore();
})