let playerSelection = "";
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;

let result = document.querySelector(".result");
let scoreboard = document.querySelector(".scoreboard");
let winner = document.querySelector(".winner");
let gameInfo = document.querySelector(".game-info");

const restart = document.querySelector("button");
restart.addEventListener("click", reset);

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  computerSelection = choices[Math.floor(Math.random() * choices.length)];
  return computerSelection;
}

const images = document.querySelectorAll("img");
images.forEach((image) => {
  image.addEventListener("click", playRoundOnClick)
});

function playRoundOnClick(event){
  playerSelection = event.target.className;
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors"){
    result.textContent = `You won this round! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
    playerScore++;
    scoreboard.textContent = `${playerScore} - ${computerScore}`;
  } else if (playerSelection === "rock" && computerSelection === "paper"){
    result.textContent = `You lost this round! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
    computerScore++;
    scoreboard.textContent = `${playerScore} - ${computerScore}`;
  } else if (playerSelection === "rock" && computerSelection === "rock"){
    result.textContent = `This round is a tie! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
    scoreboard.textContent = `${playerScore} - ${computerScore}`;
  } 

  else if(playerSelection === "paper" && computerSelection === "rock"){
    result.textContent = `You won this round! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
    playerScore++;
    scoreboard.textContent = `${playerScore} - ${computerScore}`;
  } else if (playerSelection === "paper" && computerSelection === "scissors"){
    result.textContent = `You lost this round! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
    computerScore++;
    scoreboard.textContent = `${playerScore} - ${computerScore}`;
  } else if (playerSelection === "paper" && computerSelection === "paper"){
    result.textContent = `This round is a tie! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
    scoreboard.textContent = `${playerScore} - ${computerScore}`;
  } 

  else if(playerSelection === "scissors" && computerSelection === "paper"){
    result.textContent = `You won this round! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
    playerScore++;
    scoreboard.textContent = `${playerScore} - ${computerScore}`;
  } else if (playerSelection === "scissors" && computerSelection === "rock"){
    result.textContent = `You lost this round! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
    computerScore++;
    scoreboard.textContent = `${playerScore} - ${computerScore}`;
  } else if (playerSelection === "scissors" && computerSelection === "scissors"){
    result.textContent = `This round is a tie! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
    scoreboard.textContent = `${playerScore} - ${computerScore}`;
  } 

  if (playerScore === 5){
    disableOnClick();
    result.textContent = "Congratulations! You won!";
  }
  else if (computerScore === 5){
    disableOnClick();
    result.textContent = "Game over! You lost!";
  }
}

function reset(){
  window.location.reload();
}

function disableOnClick(){
  images.forEach((image)=> {
    image.removeEventListener("click", playRoundOnClick);
  });

}

