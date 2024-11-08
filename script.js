let currentInput = '';
let history = [];

// Basic calculator functions
function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    currentInput += operator;
    updateDisplay();
}

function appendFunction(func) {
    if (func === 'sqrt') {
        currentInput += ' Math.sqrt(';
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        let result = eval(currentInput);
        currentInput = result.toString();
        // Save to history
        history.push(currentInput);
        updateHistory();
    } catch {
        currentInput = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').textContent = currentInput || '0';
}

// History panel toggle
function toggleHistory() {
    const historyPanel = document.getElementById('history-panel');
    historyPanel.style.display = historyPanel.style.display === 'none' ? 'block' : 'none';
}

// Update the history list
function updateHistory() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
    history.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
    });
}

// Random Number Game
let randomNumber = Math.floor(Math.random() * 100) + 1;

function makeGuess() {
    const guess = parseInt(document.getElementById('guess-input').value);
    const feedback = document.getElementById('game-feedback');

    if (guess === randomNumber) {
        feedback.textContent = 'Congratulations! You guessed correctly!';
    } else if (guess > randomNumber) {
        feedback.textContent = 'Too high! Try again.';
    } else if (guess < randomNumber) {
        feedback.textContent = 'Too low! Try again.';
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('game-feedback').textContent = '';
    document.getElementById('guess-input').value = '';
}

// Date Difference Calculator
function calculateDateDifference() {
    const startDate = new Date(document.getElementById('start-date-input').value);
    const endDate = new Date(document.getElementById('end-date-input').value);
    const resultDisplay = document.getElementById('datetime-result');

    if (isNaN(startDate) || isNaN(endDate)) {
        resultDisplay.textContent = 'Please select both dates.';
        return;
    }

    const diffTime = Math.abs(endDate - startDate);
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
    const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    resultDisplay.textContent = `Years: ${diffYears} Months: ${diffMonths} Days: ${diffDays}`;
}

// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function appendFunction(func) {
    if (func === 'sqrt') {
        if (currentInput !== '') {
            currentInput = Math.sqrt(currentInput);
            updateDisplay();
        }
    }
}
