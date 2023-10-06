function getComputerChoice() {
  const computerChoice = [
    "Rock",
    "Paper",
    "Scissors",
  ]

  let randomIndex = Math.floor(Math.random() * computerChoice.length)

  return randomChoice = computerChoice[randomIndex]
}

// console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock"
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats Scissors"
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose! Scissors beats Paper"
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats Rock"
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose! Rock beats Scissors"
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win! Scissors beats paper"
  } else if (playerSelection === computerSelection) {
    return "Its' a Tie, try again."
  }
}

const playerSelection = "paper"

const computerSelection = getComputerChoice().toLowerCase()

console.log(playRound(playerSelection, computerSelection));