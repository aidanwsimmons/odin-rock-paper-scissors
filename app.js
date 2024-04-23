let playerScore = 0
let computerScore = 0
let roundResult = ''
let roundDescription = ''
let gameResult = ''
let playerSelection 
let computerSelection

const rockBtn = document.querySelector('.rock')
const paperBtn = document.querySelector('.paper')
const scissorsBtn = document.querySelector('.scissors')
const mainText = document.querySelector('h2')
const secondaryText = document.querySelector('h3')
const playerDisplay = document.querySelector('.player-choice')
const cpuDisplay = document.querySelector('.cpu-choice')
const playerScoreDisplay = document.querySelector('.player-score')
const cpuScoreDisplay = document.querySelector('.cpu-score')

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
    // let computerSelection = getComputerChoice()
    computerSelection = getComputerChoice()
    // let playerSelection = prompt("Enter 'rock', 'paper' or 'scissors':").toLowerCase()
    // const validChoices = ['rock', 'paper', 'scissors']
    // while(!validChoices.includes(playerSelection)){
    //     playerSelection = prompt("Enter 'rock', 'paper' or 'scissors':").toLowerCase()
    // }
    //win
    if((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')){
        roundResult = `You Win!`
        roundDescription = `${playerSelection} beats ${computerSelection}`
        playerScore++
    }
    //lose
    else if(playerSelection !== computerSelection){
        roundResult = `You Lose!`
        roundDescription = `${computerSelection} beats ${playerSelection}`
        computerScore++
    }
    //tie
    else{
        roundResult = "You Tie!"
        roundDescription = `${computerSelection} ties with ${playerSelection}`       
    }
    return roundResult
}

rockBtn.addEventListener('click', () => {
    playerSelection = 'rock'
    playRound()
})
paperBtn.addEventListener('click', () => {
    playerSelection = 'paper'
    playRound()
})
scissorsBtn.addEventListener('click', () => {
    playerSelection = 'scissors'
    playRound()
})

//function plays 5 games and returns the results
// function playGame(){
//     playerScore = 0
//     computerScore = 0
//     for(let i = 0; i < 5; i++){
//         playRound()
//         console.log(roundResult)
//     }
//     if(playerScore > computerScore){
//         gameResult = `You Win! you won: ${playerScore} and computer won: ${computerScore} times`
//     }
//     else if(computerScore > playerScore){
//         gameResult = `You Lose! you won: ${playerScore} and computer won: ${computerScore} times`
//     }
//     else{
//         gameResult = `You tie! you won: ${playerScore} and computer won: ${computerScore} times`
//     }
//     return gameResult
// };

