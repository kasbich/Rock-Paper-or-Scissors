const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error!');
  }
};

function getComputerChoice() {
  switch(Math.floor(Math.random() * 3)) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'Draw!';
  } else if (userChoice === 'paper') {
      if (computerChoice === 'rock') {
        return 'You won!';
    } else {
        return 'Computer won!';
    }
  } else if (userChoice === 'rock') {
      if (computerChoice === 'scissors') {
        return 'You won!';
    } else {
        return 'Computer won!';
    }
  } else if (userChoice === 'scissors') {
      if (computerChoice === 'paper') {
        return 'You won!';
    } else {
        return 'Computer won!';
    }
  } else if (userChoice === 'bomb') {
    return 'You won anyway! :))'
  }
}

function playGame() {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();


