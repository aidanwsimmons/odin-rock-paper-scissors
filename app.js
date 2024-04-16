function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1

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

function playRound(playerSelection, computerSelection){
    computerSelection = getComputerChoice()
    playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase()
    //win
    if((playerSelection = 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')){
        let result = `You Win! ${playerSelection.capitalize()} beats ${computerSelection}`
    }
    //lose
    else if(playerSelection !== computerSelection){
        let result = `You Lose! ${computerSelection.capitalize()} beats ${playerSelection.capitalize()}`
    }
    //tie
    else{
        let result = "You Tie!"
    }
    return result
}