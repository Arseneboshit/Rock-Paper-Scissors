// Функция выбора компьютера
function getComputerChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

const choises = ["Rock", "Paper", "Scissors"];

// DOM: получаем кнопки
const Rock = document.getElementById('Rock');
const Paper = document.getElementById('Paper');
const Scissors = document.getElementById('Scissors');

const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');

// Счётчики
let humanScore = 0;
let computerScore = 0;

// Логика игры
function playRound(humanChoice, computerChoice) {
    let roundResult = "";

    if (humanChoice === computerChoice) {
        humanScore++;
        computerScore++;
        roundResult = `It's a draw! You both chose ${humanChoice}`;
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Scissors" && computerChoice === "Paper") ||
        (humanChoice === "Paper" && computerChoice === "Rock")
    ) {
        humanScore++;
        roundResult = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        roundResult = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    resultDiv.textContent = roundResult;
    scoreDiv.textContent = `Score: You — ${humanScore}, Computer — ${computerScore}`;

    if (humanScore >= 5) {
        resultDiv.textContent += "\n🎉 You won the game!";
        disableButtons();
    } else if (computerScore >= 5) {
        resultDiv.textContent += "\n💀 You lost the game!";
        disableButtons();
    }
}

function disableButtons() {
    Rock.disabled = true;
    Paper.disabled = true;
    Scissors.disabled = true;
}

// Обработчики кнопок
Rock.addEventListener('click', () => {
    playRound("Rock", getComputerChoice(choises));
});

Paper.addEventListener('click', () => {
    playRound("Paper", getComputerChoice(choises));
});

Scissors.addEventListener('click', () => {
    playRound("Scissors", getComputerChoice(choises));
});
