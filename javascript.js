function getComputerChoice() {
  const computerChoice = [
    "Rock",
    "Paper",
    "Scissors",
  ]

  let randomIndex = Math.floor(Math.random() * computerChoice.length)

  return randomChoice = computerChoice[randomIndex]
}

console.log(getComputerChoice());