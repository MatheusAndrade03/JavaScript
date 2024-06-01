let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('guessButton').addEventListener('click', checkGuess);
document.getElementById('resetButton').addEventListener('click', resetGame);

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const feedback = document.getElementById('feedback');
    const attemptsDisplay = document.getElementById('attempts');
    const resetButton = document.getElementById('resetButton');
    
    let userGuess = Number(guessInput.value);
    attempts++;

    if (userGuess === randomNumber) {
        feedback.textContent = `Parabéns! Você acertou o número em ${attempts} tentativas!`;
        feedback.style.color = 'green';
        resetButton.style.display = 'block';
    } else if (userGuess > randomNumber) {
        feedback.textContent = 'Muito alto! Tente novamente.';
        feedback.style.color = 'red';
    } else {
        feedback.textContent = 'Muito baixo! Tente novamente.';
        feedback.style.color = 'red';
    }

    attemptsDisplay.textContent = `Tentativas: ${attempts}`;
    guessInput.value = '';
    guessInput.focus();
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    document.getElementById('feedback').textContent = '';
    document.getElementById('attempts').textContent = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('guessInput').focus();
    document.getElementById('resetButton').style.display = 'none';
}
