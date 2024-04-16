let playerScore = 0
let computerScore = 0


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
        playerScore++
    }
    //lose
    else if(playerSelection !== computerSelection){
        result = `You Lose! ${computerSelection} beats ${playerSelection}`
        computerScore++
    }
    //tie
    else{
        result = "You Tie!"       
    }
    return result
}

//function plays 5 games and returns the results
function playGame(){
    playerScore = 0
    computerScore = 0
    for(let i = 0; i < 5; i++){
        playRound()
    }
    if(playerScore > computerScore){
        console.log(`You Win! you won: ${playerScore} and computer won: ${computerScore} times`)
    }
    else if(computerScore > playerScore){
        console.log(`You Lose! you won: ${playerScore} and computer won: ${computerScore} times`)
    }
    else{
        console.log(`You tie! you won: ${playerScore} and computer won: ${computerScore} times`)
    }
};

