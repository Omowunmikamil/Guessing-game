const result = document.getElementById('result');
const guess = document.getElementById('guess');
const submit = document.getElementById('submit');
const playAgain = document.getElementById('reset');
const attempts = document.getElementById('attempts');
const attemptsLeft = document.getElementById('attempts-left');

let attemptsCount = 0;
let computer = Math.floor(Math.random() * 100) + 1;

// Debugging log to verify the initial value of computer
console.log(`Initial Computer Number: ${computer}`);

submit.addEventListener('click', () => {
  attemptsCount++;
  attempts.textContent = attemptsCount;
  attemptsLeft.textContent = 10 - attemptsCount;
  let userGuess = parseInt(guess.value);
  
  // Debugging log to check the values of userGuess and computer
  console.log(`User Guess: ${userGuess}, Computer: ${computer}`);

  if (userGuess === computer) {
    result.textContent = 'Congratulations! You guessed the number!';
    result.style.backgroundColor = 'green';
    guess.disabled = true;
    submit.disabled = true;
  } else if (attemptsCount === 10) {
    result.textContent = `Game Over! The number was ${computer}`;
    result.style.backgroundColor = 'red';
    guess.disabled = true;
    submit.disabled = true;
  } else {
    result.textContent = 'Wrong guess. Try again!';
    result.style.backgroundColor = 'red';
  }
});

playAgain.addEventListener('click', () => {
  attemptsCount = 0;
  attempts.textContent = attemptsCount;
  attemptsLeft.textContent = 10 - attemptsCount;
  result.textContent = '';
  result.style.backgroundColor = 'transparent';
  guess.value = '';
  guess.disabled = false;
  submit.disabled = false;
  computer = Math.floor(Math.random() * 100) + 1;

  // Debugging log to verify the new value of computer
  console.log(`New Game Started. New Computer Number: ${computer}`);
});
