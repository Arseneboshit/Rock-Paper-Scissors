
//Глобальные переменные





// Функция выбора компьютера

function getComputerChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

const choises = ["Rock", "Paper", "Scissors"];

console.log(getComputerChoice(choises));

//Функция выбора человека
function getHumanChoice() {
    let humanChoice = prompt('Введите: Rock, Paper, Scissors');
    if (!humanChoice) return '';
    const formatted = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();
    return formatted;
}



//Мэин функция логики игры
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`Ничья! Вы оба выбрали ${humanChoice}`);
        } else if (
            (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Scissors" && computerChoice === "Paper") ||
            (humanChoice === "Paper" && computerChoice === "Rock")
        ) {
            humanScore++;
            console.log(`Вы выиграли! ${humanChoice} побеждает ${computerChoice}`);
        } else {
            computerScore++;
            console.log(`Вы проиграли! ${computerChoice} побеждает ${humanChoice}`);
        }

        console.log(`Счёт: Вы — ${humanScore}, Компьютер — ${computerScore}`);
    }


    for (let i = 0; i < 5; i++) {
        const human = getHumanChoice();
        const computer = getComputerChoice(choises);

        playRound(human, computer)
    }
    
    if (humanScore > computerScore) {
        console.log("Вы выиграли игру!");
    } else if (humanScore < computerScore) {
        console.log("Вы проиграли игру!");
    } else {
        console.log("Игра закончилась вничью!");
    }

}

playGame();




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

