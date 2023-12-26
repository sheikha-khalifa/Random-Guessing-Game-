const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Function to check the user's guess
function checkGuess() {
  const userGuess = parseInt(document.getElementById('userGuess').value);

  if (userGuess === randomNumber) {
    document.getElementById('result').innerHTML = `Correct! You guessed the number in ${attempts} attempts. <button onclick="resetGame()">Play Again</button>`;
  } else if (userGuess < randomNumber) {
    document.getElementById('result').innerHTML = 'Wrong guess! Try guessing higher.';
  } else {
    document.getElementById('result').innerHTML = 'Wrong guess! Try guessing lower.';
  }

  attempts++;
}

// Function to reset the game
function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById('result').innerHTML = '';
  document.getElementById('userGuess').value = '';
}
 
// Event listener for the guess button
document.getElementById('guessBtn').addEventListener('click', checkGuess);