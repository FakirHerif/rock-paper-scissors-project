const playerChoiceRock = document.querySelector(".playerRock");
const playerChoicePaper = document.querySelector(".playerPaper");
const playerChoiceScissors = document.querySelector(".playerScissors");

const computerChoiceRock = document.querySelector(".computerRock");
const computerChoicePaper = document.querySelector(".computerPaper");
const computerChoiceScissors = document.querySelector(".computerScissors");

const playerScoreSpan = document.querySelector(".playerScore");
const computerScoreSpan = document.querySelector(".computerScore");

const showScore = document.querySelector(".points")

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

    const getComputerChoice = computerSelection();
    console.log("Rakibin Seçimi: " + getComputerChoice);

    if ((getPlayerChoice == getComputerChoice )) {
        round += 1;
        console.log(`${getPlayerChoice} vs ${getComputerChoice} BERABERE!!! Puanınız: ${playerScore} - Rakibin Puanı: ${computerScore}`);
        showScore.innerHTML = `🚩 ROUND ${round} : ${getPlayerChoice.toUpperCase()} VS ${getComputerChoice.toUpperCase()} 🔊 IT'S A TIE 🙄`;
        
    } else if ((getPlayerChoice == "rock" && getComputerChoice == "scissors") || (getPlayerChoice == "paper" && getComputerChoice == "rock") || (getPlayerChoice == "scissors" && getComputerChoice == "paper"))  {
        playerScore += 1;
        round += 1;
        showScore.innerHTML = `🚩 ROUND ${round} : ${getPlayerChoice.toUpperCase()} BEATS ${getComputerChoice.toUpperCase()} 🔊 YOU WON 🤩`;
        console.log(`${getPlayerChoice} vs ${getComputerChoice} KAZANDINIZ!!! ${getPlayerChoice} ${getComputerChoice}'ı yener. Puanınız: ${playerScore} - Rakibin Puanı: ${computerScore}`);

    } else if ( (getComputerChoice == "rock" && getPlayerChoice == "scissors") || (getComputerChoice == "paper" && getPlayerChoice == "rock") || (getComputerChoice == "scissors" && getPlayerChoice == "paper") ) {
        computerScore += 1;
        round += 1;
        showScore.innerHTML = `🚩 ROUND ${round} : ${getComputerChoice.toUpperCase()} BEATS ${getPlayerChoice.toUpperCase()} 🔊 YOU LOST 😭`;
        console.log(`${getPlayerChoice} vs ${getComputerChoice} KAYBETTİNİZ!!! ${getPlayerChoice} ${getComputerChoice}'ı yenemez. Puanınız: ${playerScore} - Rakibin Puanı: ${computerScore}`);

    } else {
        console.log("HATA !!!");
    };
    playerScoreSpan.innerHTML = `SCORE: ${playerScore}`;
    computerScoreSpan.innerHTML = `SCORE: ${computerScore}`;

};

playerChoiceRock.addEventListener("click", game);
playerChoicePaper.addEventListener("click", game);
playerChoiceScissors.addEventListener("click", game);



/*
while(playerScore < 5 && computerScore < 5) {
    game();
    if (playerScore == 5) {
        console.log(`OYUN ${playerScore} - ${computerScore} BİTTİ. KAZANDINIZ TEBRİKLER !!!`);
        alert(`OYUN ${playerScore} - ${computerScore} BİTTİ. KAZANDINIZ TEBRİKLER !!!`);
    } else if (playerScore == computerScore) {
        console.log(`SKOR: ${playerScore} - ${computerScore} KRİTİK BİR AN PUANLAR EŞİT !!!`);
        alert(`SKOR: ${playerScore} - ${computerScore} KRİTİK BİR AN PUANLAR EŞİT !!!`);
    } else if (computerScore == 5) {
        console.log(`OYUN ${playerScore} - ${computerScore} BİTTİ. ÜZGÜNÜM KAYBETTİNİZ !!!`);
        alert(`OYUN ${playerScore} - ${computerScore} BİTTİ. ÜZGÜNÜM KAYBETTİNİZ !!!`);
    } else {
        console.log(`5'TE BİTER... OYUN DEVAM EDİYOR !!! ${playerScore} - ${computerScore}`)
        alert(`5'TE BİTER... OYUN DEVAM EDİYOR !!! ${playerScore} - ${computerScore}`)
    }
};
 */