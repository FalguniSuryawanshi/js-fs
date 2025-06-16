let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guess');
const remaining = document.querySelector('.lastResult'); // Fixed typo
const lowOrhigh = document.querySelector('.lowOrhigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userinput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a number');
  } else if (guess < 1) {
    alert('Please enter a number more than 0');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    displayGuess(guess);
    checkGuess(guess);
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right!`);
    endGame();
  } else if (numGuess === 11) {
    displayMessage(`Game Over. Random number was ${randomNumber}`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too High`);
  }
}

function displayGuess(guess) {
  userinput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrhigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userinput.value = '';
  userinput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function () {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    guessSlot.innerHTML = '';
    numGuess = 1;
    remaining.innerHTML = `${11 - numGuess}`;
    userinput.removeAttribute('disabled');
    startOver.removeChild(p);
    lowOrhigh.innerHTML = '';
    playGame = true;
  });
}
