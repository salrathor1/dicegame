let currentScore = document.getElementById("current-score");

let diceImage = document.getElementById("dice");

let button = document.getElementById("roll");
let newGame = document.getElementById("new-game");

let score = 0;
let moves = 0;


newGame.addEventListener("click", ()=> {
    score = 0;
    moves = 0;
    currentScore.innerHTML = `0`;
    diceImage.style.visibility = "visible";
    newGame.style.visibility = "hidden";
    button.style.visibility = "visible";
    diceImage.src = ``;

})

button.addEventListener("click", ()=> {
    moves++;
    var randomNum = Math.ceil(Math.random() * 6);
    diceImage.src = `img/dice${randomNum}.png`
    currentScore.innerHTML = score += randomNum;
    if (score >= 20) {
        youWin();
    } else if (randomNum == 1) {
        youLose();
    } else {
    }
})

const youWin = () => {
        currentScore.innerHTML = `Your score is 20 or above [${score}!] You win! [${moves}] moves!`;
        diceImage.style.visibility = "hidden";
        newGame.style.visibility = "visible";
        button.style.visibility = "hidden";
}

const youLose = () => {
    currentScore.innerHTML = `You lose! You rolled a 1 (Score: ${score}) [${moves}] moves!`;
    diceImage.style.visibility = "hidden";
    newGame.style.visibility = "visible";
    button.style.visibility = "hidden";
}
// let currentScore = document.getElementById("current-score");

// let diceImage = document.getElementById("dice");

// let button = document.getElementById("roll");
// let newGame = document.getElementById("new-game");

// let score = 0;

// button.addEventListener("click", () => {
//         generateNum();
//         currentScore.innerHTML = score;
//         checkConditions();
// })

// const generateNum = () => {
//     let randomNum = Math.ceil(Math.random() * 6);
//     checkConditions(randomNum);
//     diceImage.src = `img/dice${randomNum}.png`;
//     score += randomNum;
//     return score;
// }

// const checkConditions = () => {
//     if(score >= 20) {
//         currentScore.innerHTML = `Your score is 20 or above [${score}!] You win!`;
//         diceImage.style.visibility = "hidden";
//         newGame.style.visibility = "visible";
//         button.style.visibility = "hidden";
//     }
// }


// newGame.addEventListener("click", ()=> {
//     score = 0;
//     currentScore.innerHTML = `0`;
//     diceImage.style.visibility = "visible";
//     newGame.style.visibility = "hidden";
//     button.style.visibility = "visible";
//     diceImage.src = ``;

// })