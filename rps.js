let rounds = 0;
let playerScore = 0;
let computerScore = 0;
let playerSelection;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissors');
const all = document.querySelector('.main');
const buttons = document.querySelector('.buttons');
const results = document.querySelector('.announcements');
const playAgainButton = document.querySelector('.again');

let losePic = document.createElement('img');
losePic.setAttribute("src", "img/ICANT.png");
losePic.setAttribute("height", "100px");
losePic.setAttribute("width", "100px");

let winPic = document.createElement('img');
winPic.setAttribute("src", "img/pog.png");
winPic.setAttribute("height", "100px");
winPic.setAttribute("width", "100px");


rock.addEventListener('click', () => {
    playerSelection = "Rock";
    game();
});
paper.addEventListener('click', () => {
    playerSelection = "Paper";
    game();
});
scissor.addEventListener('click', () => {
    playerSelection = "Scissors";
    game();
});


function gameComputerChoice () {
    let choice = ['Rock','Paper','Scissors'];
    let ran = Math.floor(Math.random()*choice.length);
    return choice[ran];
}

function playRound(computerSelection, playerSelection) {
    let comp = computerSelection.length;
    let player = playerSelection.length;
    let compare = comp - player;

    if(compare == 0) {
        return ("Draw!");
    } else if(compare == 4 || compare < 0 && compare > -4) {
        return ("You Win!");
    } else {
        return ("You Lose!");
    }
}

function win(computerScore, playerScore) {
    if(playerScore === 5) {
        all.removeChild(buttons);
        all.appendChild(winPic)
        playAgainButton.style.visibility = 'visible';
        return "You won against the Computer!!"
    } else if (computerScore === 5) {
        all.removeChild(buttons);
        all.appendChild(losePic);
        playAgainButton.style.visibility = 'visible';
        return "You lost against the Computer."
    } else 
        return "Next Round!"
}

function reset() {
    playAgainButton.addEventListener('click', () => {
        window.location.reload();
    })
}

function game() {

    rounds++;
    //console.log(rounds);
    let computerSelection = gameComputerChoice ();

    if(playRound(computerSelection, playerSelection) == "You Win!")
        playerScore++;
    else if(playRound(computerSelection, playerSelection) == "You Lose!")
        computerScore++;


    const throws = document.querySelector(".resultOfRound")
    throws.textContent = `Round ${rounds}! Player throws ${playerSelection}! Computer throws ${computerSelection}!`
    
    const winner = document.querySelector('.winner');
    winner.textContent = `${playRound(computerSelection, playerSelection)}`;

    const score = document.querySelector('.score');
    score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;

    const over = document.querySelector('.complete');
    over.textContent = `${win(computerScore, playerScore)}`;

    reset();
}
