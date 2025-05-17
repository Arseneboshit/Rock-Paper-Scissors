//Глобальные переменные



//Функция выбора компьютера
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


