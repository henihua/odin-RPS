function gameComputerChoice () {
    let choice = ['Rock','Paper','Scissors']
    let ran = Math.floor(Math.random()*choice.length);
    return choice[ran];
}

function playRound(computerSelection, playerSelection) {
    let comp = computerSelection.length;
    let player = playerSelection.length;
    let playerString = playerSelection.toLowerCase()
    let capPlayerString = playerString.charAt(0).toUpperCase() + playerString.slice(1)


    if (comp == player) //draw
        return ("Draw!") 
    else if(comp == 4 && player == 5) //pc = rock, player = paper
        return ("You Win! " + capPlayerString + " beats " + computerSelection)
    else if(comp == 5 && player == 8)//pc = paper, player = rock
        return ("You Lose! " + computerSelection + " beats " + capPlayerString)
    else if(comp == 8 && player == 4) //pc = scissor, player = rock
        return ("You Win! " + capPlayerString + " beats " + computerSelection)
    else if(comp == 4 && player == 8)//pc = rock, player = scissors
        return ("You Lose! " + computerSelection + " beats " + capPlayerString)
    else if(comp == 5 && player == 8)//pc == paper, player = scissors
        return ("You Win! " + capPlayerString + " beats " + computerSelection)
    else //pc = scissor, player = paper
        return ("You Lose! " + computerSelection + " beats " + capPlayerString)

}
