let computerSelection
let playerSelection

function getComputerChoice() {
  const computerChoice = [
    "rock",
    "paper",
    "scissors",
  ]
  
  return randomChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)]
}


function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Please enter Choice: (Rock, Paper, or Scissors) ").toLowerCase()
  computerSelection = getComputerChoice()

  console.log(`You chose ${playerSelection}`);
  console.log(`CPU chose ${computerSelection}`);

  if (playerSelection === "rock" && computerSelection === "paper") {
    return "lose"
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "win"
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "lose"
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "win"
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "lose"
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "win"
  }
}

function game() {
  const Lose = "You lost!"
  const Win  = "You Won!"
  const Tie = "It's a Tie!"
  let playerScore = 0
  let computerScore = 0

  for (let round = 0; round < 5; round++) {
    const result = playRound(playerSelection, computerSelection)
    if (result === "win") {
      console.log(Win);
      playerScore++
    } else if (result === "lose") {
      console.log(Lose);
      computerScore++
    } else {
      console.log(Tie);
    }
  }

  if (playerScore > computerScore) {
    console.log(`You win the game! ${playerScore} - ${computerScore}`);
  } else if (playerScore < computerScore) {
    console.log(`You lose the game. ${playerScore} - ${computerScore}`);
  } else {
    console.log(`The game was an overall tie. ${playerScore} - ${computerScore}`);
  }
}

game()