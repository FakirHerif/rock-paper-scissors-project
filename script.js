const playerChoiceRock = document.querySelector(".playerRock");
const playerChoicePaper = document.querySelector(".playerPaper");
const playerChoiceScissors = document.querySelector(".playerScissors");

const computerChoiceRock = document.querySelector(".computerRock");
const computerChoicePaper = document.querySelector(".computerPaper");
const computerChoiceScissors = document.querySelector(".computerScissors");

const playerScoreSpan = document.querySelector(".playerScore");
const computerScoreSpan = document.querySelector(".computerScore");

let playerScore = 0;
let computerScore = 0;
let getPlayerChoice;

playerChoiceRock.addEventListener("click", function() {
   getPlayerChoice = "taş";
   console.log(getPlayerChoice);
})

playerChoicePaper.addEventListener("click", function() {
    getPlayerChoice = "kağıt";
    console.log(getPlayerChoice);
 })

playerChoiceScissors.addEventListener("click", function() {
    getPlayerChoice = "makas";
    console.log(getPlayerChoice);
 })


function computerSelection() {
    let getComputerChoice = ["taş", "kağıt", "makas"];
    return getComputerChoice[Math.floor(Math.random() * getComputerChoice.length)]
};


function game() {

    const getComputerChoice = computerSelection();
    console.log("Rakibin Seçimi: " + getComputerChoice);

    if ((getPlayerChoice == getComputerChoice )) {
        console.log(`${getPlayerChoice} vs ${getComputerChoice} BERABERE!!! Puanınız: ${playerScore} - Rakibin Puanı: ${computerScore}`);
        
    } else if ((getPlayerChoice == "taş" && getComputerChoice == "makas") || (getPlayerChoice == "kağıt" && getComputerChoice == "taş") || (getPlayerChoice == "makas" && getComputerChoice == "kağıt"))  {
        playerScore += 1;
        console.log(`${getPlayerChoice} vs ${getComputerChoice} KAZANDINIZ!!! ${getPlayerChoice} ${getComputerChoice}'ı yener. Puanınız: ${playerScore} - Rakibin Puanı: ${computerScore}`);

    } else if ( (getComputerChoice == "taş" && getPlayerChoice == "makas") || (getComputerChoice == "kağıt" && getPlayerChoice == "taş") || (getComputerChoice == "makas" && getPlayerChoice == "kağıt") ) {
        computerScore += 1;
        console.log(`${getPlayerChoice} vs ${getComputerChoice} KAYBETTİNİZ!!! ${getPlayerChoice} ${getComputerChoice}'ı yenemez. Puanınız: ${playerScore} - Rakibin Puanı: ${computerScore}`);

    } else {
        console.log("HATA !!! TAŞ, KAĞIT VEYA MAKAS YAZMALISINIZ.");
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