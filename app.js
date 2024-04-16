
//function randomly chooses from rock, paper, or scissors and returns the result as a string
function getComputerChoice() {
    let num = Math.floor(Math.random() * (3 - 1 + 1)) + 1

    if(num == 1){
        return 'rock'
    }
    else if(num == 2){
        return 'paper'
    }
    else{
        return 'scissors'
    }
}

//function plays a round of rock paper scissors and returns a string indicating the results
function playRound(){
    let computerSelection = getComputerChoice()
    let playerSelection = prompt("Enter 'rock', 'paper' or 'scissors':").toLowerCase()
    const validChoices = ['rock', 'paper', 'scissors']
    while(!validChoices.includes(playerSelection)){
        playerSelection = prompt("Enter 'rock', 'paper' or 'scissors':").toLowerCase()
    }
    let result = ''
    //win
    if((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')){
        result = `You Win! ${playerSelection} beats ${computerSelection}`
        console.log(playerSelection, computerSelection)
    }
    //lose
    else if(playerSelection !== computerSelection){
        result = `You Lose! ${computerSelection} beats ${playerSelection}`
        console.log(playerSelection, computerSelection)
    }
    //tie
    else{
        result = "You Tie!"
        console.log(playerSelection, computerSelection)        
    }
    return result
}

