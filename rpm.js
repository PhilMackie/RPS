function computerChoosePlayItem() {
  const randInt = Math.floor(Math.random() * 3 + 1);
  let result;

  switch (randInt) {
    case 1:
      result = "Rock";
      break;
    case 2:
      result = "Paper";
      break;
    case 3:
      result = "Scissors";
      break;
    default:
      return "Bad selection";
      break;
  }

  console.info(`The computer played ${result}`);

  return result;
}

// a function for input
function userGetInput() {
  const userSelection = prompt("Rock, Paper or Scissors?");
  const formattedSelection =
    userSelection.charAt(0).toUpperCase() +
    userSelection.slice(1).toLowerCase();

  console.info(`The player played ${formattedSelection}`);

  return formattedSelection;
}

function gameDetermineWinner({ playerSelection, computerSelection }) {
  if (playerSelection === computerSelection) return null;

  if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Rock")
  ) {
    return "player";
  }

  return "computer";
}

function playRound() {
  console.log("-----New Round!-----");

  const playerSelection = userGetInput();
  console.log("USER: " + playerSelection);

  const computerSelection = computerChoosePlayItem();
  console.log("COMPUTER: " + computerSelection);

  return {
    playerSelection,
    computerSelection,
  };
}

function appendLogItem(message) {
  const logArea = document.getElementById("log");
  logArea.append(message);
  logArea.append(document.createElement("br"));
}

function playGame() {
  let computerWins = 0;
  let playerWins = 0;

  do {
    const roundSelections = playRound();
    const winner = gameDetermineWinner(roundSelections);

    if (!winner) console.info("Tie!");
    if (winner) console.info(`The round goes to ${winner}!`);

    if (winner === "player") playerWins++;
    if (winner === "computer") computerWins++;

    console.info(
      `The score is: player ${playerWins} - computer ${computerWins}`
    );

    appendLogItem(
      `The score is: player ${playerWins} - computer ${computerWins}`
    );
  } while (computerWins !== 5 && playerWins !== 5);

  if (computerWins === 5) {
    const computerWinningString = ">>> The computer wins! <<<";
    console.info(computerWinningString);
    return appendLogItem(computerWinningString);
  }

  const playerWinningString = ">>> The player wins! <<<";
  console.info(playerWinningString);
  return appendLogItem(playerWinningString);
}

playGame();
