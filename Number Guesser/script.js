
var min = 1,
    max = 10,
    winningNum = randomNumber(),
    guessesLeft = 3;

var minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessInput = document.querySelector('#guess-input'),
    guessBtn = document.querySelector('#guess-btn'),
    message = document.querySelector('.message'),
    game = document.querySelector('#game');
    
minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function(e) {
  if(e.target.className === 'play-again') {
    window.location.reload();
  }
})

guessBtn.addEventListener('click', function(){
  var guess = parseInt(guessInput.value);

  // Validation 

  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please select a number between ${min} and ${max}`, 'red');
  }
  // Winning
  if(guess === winningNum) {
    gameFinished(true, `Correct! You have won! ${winningNum} was the correct answer`);
  } else {
    guessesLeft -= 1;
  }
  // Losing
  if(guessesLeft === 0) {
    gameFinished(false, `Game over, You lost the correct number was ${winningNum}`);
  } else {
    guessInput.style.borderdColor = 'red';
    guessInput.value = '';
    setMessage(`${guess} was not correct. you have ${guessesLeft} guesses left`, 'red')
  }
})

// Main function

function gameFinished(won, msg) {
  won === true ? color = 'green' : color = 'red';
  guessInput.disabled = true;
  guessInput.style.borderdColor = color;
  message.style.color = color;
  setMessage(msg);
  guessBtn.value = 'play-again';
  guessBtn.classList = 'play-again';
}

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}

function randomNumber() {
  return Math.floor(Math.random() * (10) + 1);
}