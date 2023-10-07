const playerChoiceRock = document.querySelector(".playerRock");
const playerChoicePaper = document.querySelector(".playerPaper");
const playerChoiceScissors = document.querySelector(".playerScissors");

const computerChoiceRock = document.querySelector(".computerRock");
const computerChoicePaper = document.querySelector(".computerPaper");
const computerChoiceScissors = document.querySelector(".computerScissors");

const playerScoreSpan = document.querySelector(".playerScore");
const computerScoreSpan = document.querySelector(".computerScore");

const showScore = document.querySelector(".points");

const gameOver = document.querySelector(".gameOver");

const playAgain = document.querySelector(".playAgain");

let playerScore = 0;
let computerScore = 0;
let getPlayerChoice;
let round = 0;

playerChoiceRock.addEventListener("click", function() {
   getPlayerChoice = "rock";
   console.log(getPlayerChoice);
})

playerChoicePaper.addEventListener("click", function() {
    getPlayerChoice = "paper";
    console.log(getPlayerChoice);
 })

playerChoiceScissors.addEventListener("click", function() {
    getPlayerChoice = "scissors";
    console.log(getPlayerChoice);
 })


function computerSelection() {
    let getComputerChoice = ["rock", "paper", "scissors"];
    return getComputerChoice[Math.floor(Math.random() * getComputerChoice.length)]
};


function game() {

    getComputerChoice = computerSelection();
    console.log("Rakibin Seçimi: " + getComputerChoice);


    playerChoiceRock.style.backgroundColor = "";
    playerChoicePaper.style.backgroundColor = "";
    playerChoiceScissors.style.backgroundColor = "";
    computerChoiceRock.style.backgroundColor = "";
    computerChoicePaper.style.backgroundColor = "";
    computerChoiceScissors.style.backgroundColor = "";


    if ((getPlayerChoice == getComputerChoice )) {
        round += 1;
        console.log(`${getPlayerChoice} vs ${getComputerChoice} BERABERE!!! Puanınız: ${playerScore} - Rakibin Puanı: ${computerScore}`);
        showScore.innerHTML = `🚩 ROUND ${round} : ${getPlayerChoice.toUpperCase()} VS ${getComputerChoice.toUpperCase()} 🔊 IT'S A TIE 🙄`;
        
        document.querySelector(`.player${getPlayerChoice.charAt(0).toUpperCase() + getPlayerChoice.slice(1)}`).style.backgroundColor = "yellow";
        document.querySelector(`.computer${getComputerChoice.charAt(0).toUpperCase() + getComputerChoice.slice(1)}`).style.backgroundColor = "yellow";

    } else if ((getPlayerChoice == "rock" && getComputerChoice == "scissors") || (getPlayerChoice == "paper" && getComputerChoice == "rock") || (getPlayerChoice == "scissors" && getComputerChoice == "paper"))  {
        playerScore += 1;
        round += 1;
        showScore.innerHTML = `🚩 ROUND ${round} : ${getPlayerChoice.toUpperCase()} BEATS ${getComputerChoice.toUpperCase()} 🔊 YOU WON 🤩`;
        console.log(`${getPlayerChoice} vs ${getComputerChoice} KAZANDINIZ!!! ${getPlayerChoice} ${getComputerChoice}'ı yener. Puanınız: ${playerScore} - Rakibin Puanı: ${computerScore}`);

        document.querySelector(`.player${getPlayerChoice.charAt(0).toUpperCase() + getPlayerChoice.slice(1)}`).style.backgroundColor = "rgb(0, 255, 98)";
        document.querySelector(`.computer${getComputerChoice.charAt(0).toUpperCase() + getComputerChoice.slice(1)}`).style.backgroundColor = "red";

    } else if ( (getComputerChoice == "rock" && getPlayerChoice == "scissors") || (getComputerChoice == "paper" && getPlayerChoice == "rock") || (getComputerChoice == "scissors" && getPlayerChoice == "paper") ) {
        computerScore += 1;
        round += 1;
        showScore.innerHTML = `🚩 ROUND ${round} : ${getComputerChoice.toUpperCase()} BEATS ${getPlayerChoice.toUpperCase()} 🔊 YOU LOST 😭`;
        console.log(`${getPlayerChoice} vs ${getComputerChoice} KAYBETTİNİZ!!! ${getPlayerChoice} ${getComputerChoice}'ı yenemez. Puanınız: ${playerScore} - Rakibin Puanı: ${computerScore}`);

        document.querySelector(`.player${getPlayerChoice.charAt(0).toUpperCase() + getPlayerChoice.slice(1)}`).style.backgroundColor = "red";
        document.querySelector(`.computer${getComputerChoice.charAt(0).toUpperCase() + getComputerChoice.slice(1)}`).style.backgroundColor = "rgb(0, 255, 98)";

    } else {
        console.log("HATA !!!");
    };
    playerScoreSpan.innerHTML = `SCORE: ${playerScore}`;
    computerScoreSpan.innerHTML = `SCORE: ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
        endgame();
    }
};

function endgame() {
    if (playerScore === 5){
        console.log("kazandın");
        playerScore = 0;
        computerScore = 0;
        gameOver.innerHTML = `GAME OVER ! YOU WON ! TRY AGAIN !!!`;
        playerChoiceRock.removeEventListener("click", game);
        playerChoicePaper.removeEventListener("click", game);
        playerChoiceScissors.removeEventListener("click", game);
    } else if (computerScore === 5) {
        console.log("kaybettin")
        playerScore = 0;
        computerScore = 0;
        gameOver.innerHTML = `GAME OVER ! YOU LOST ! TRY AGAIN !!!`;
        playerChoiceRock.removeEventListener("click", game);
        playerChoicePaper.removeEventListener("click", game);
        playerChoiceScissors.removeEventListener("click", game);
    }
    playAgain.disabled = false; 
}


playAgain.addEventListener("click", function() {
    console.log("tıkladın")
    playerScore = 0;
    computerScore = 0;
    round = 0;
    playerScoreSpan.innerHTML = `SCORE: ${playerScore}`;
    computerScoreSpan.innerHTML = `SCORE: ${computerScore}`;
    playerChoiceRock.addEventListener("click", game);
    playerChoicePaper.addEventListener("click", game);
    playerChoiceScissors.addEventListener("click", game);
    showScore.innerHTML = "CHOICE YOUR WEAPONS !!! 💥 💥 💥";
    gameOver.innerHTML = "";


    document.querySelector(`.player${getPlayerChoice.charAt(0).toUpperCase() + getPlayerChoice.slice(1)}`).style.backgroundColor = "white";

    document.querySelector(`.computer${getComputerChoice.charAt(0).toUpperCase() + getComputerChoice.slice(1)}`).style.backgroundColor = "white";

    playAgain.disabled = true;
});


playerChoiceRock.addEventListener("click", game);
playerChoicePaper.addEventListener("click", game);
playerChoiceScissors.addEventListener("click", game);
