let playerScore = 0;
let computerScore = 0;


function game (){
    let getPlayerChoice = prompt("Taş, Kağıt, Makas").toString().toLocaleLowerCase();
    console.log("Seçiminiz: " + getPlayerChoice);
    
    let getComputerChoice = ["taş", "kağıt", "makas"];

    function computerSelection() {
        getComputerChoice = getComputerChoice[Math.floor(Math.random() * getComputerChoice.length)]
        console.log("Rakibin Seçimi: " + getComputerChoice);
    };
    
    computerSelection();

    if ((getPlayerChoice == getComputerChoice )) {
        console.log(`${getPlayerChoice} vs ${getComputerChoice} BERABERE!!! Puanınız: ${playerScore} - Rakibin Puanı: ${computerScore}`);
        alert(`${getPlayerChoice} vs ${getComputerChoice} BERABERE!!! Puanınız: ${playerScore} - Rakibin Puanı: ${computerScore}`);
    } else if ((getPlayerChoice == "taş" && getComputerChoice == "makas") || (getPlayerChoice == "kağıt" && getComputerChoice == "taş") || (getPlayerChoice == "makas" && getComputerChoice == "kağıt"))  {
        playerScore += 1;
        console.log(`${getPlayerChoice} vs ${getComputerChoice} KAZANDINIZ!!! ${getPlayerChoice} ${getComputerChoice}'ı yener. Puanınız: ${playerScore} - Rakibin Puanı: ${computerScore}`);
        alert(`${getPlayerChoice} vs ${getComputerChoice} KAZANDINIZ!!! ${getPlayerChoice} ${getComputerChoice}'ı yener. Puanınız: ${playerScore} - Rakibin Puanı: ${computerScore}`);
    } else if ( (getComputerChoice == "taş" && getPlayerChoice == "makas") || (getComputerChoice == "kağıt" && getPlayerChoice == "taş") || (getComputerChoice == "makas" && getPlayerChoice == "kağıt") ) {
        computerScore += 1;
        console.log(`${getPlayerChoice} vs ${getComputerChoice} KAYBETTİNİZ!!! ${getPlayerChoice} ${getComputerChoice}'ı yenemez. Puanınız: ${playerScore} - Rakibin Puanı: ${computerScore}`);
        alert(`${getPlayerChoice} vs ${getComputerChoice} KAYBETTİNİZ!!! ${getPlayerChoice} ${getComputerChoice}'ı yenemez. Puanınız: ${playerScore} - Rakibin Puanı: ${computerScore}`);
    } else {
        console.log("HATA !!! TAŞ, KAĞIT VEYA MAKAS YAZMALISINIZ.");
        alert("HATA !!! TAŞ, KAĞIT VEYA MAKAS YAZMALISINIZ.");
    }
};

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
