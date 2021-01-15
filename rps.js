
let choices = ['rock', 'paper', 'scissors'];
let playerSelection = '';
let computerSelection = '';
let result = ['player loses!', 'player wins!', 'draw'];

function computerPlay() {
  // random number between 1 and 3. 
  // * by 3 to ensure number does not exceed 3
  let randomize = Math.floor(Math.random() * 3);
  return choices[randomize];
}
function userSelect() {
  let userInput = prompt('choose rock, paper, or scissors').toLocaleLowerCase(); //lowercase for case sensitivity
  if (userInput == '') {
    console.log('no value entered');
    return;
  }
  if (userInput != 'rock' && userInput != 'paper' && userInput != 'scissors') {
    console.log(userInput + ' is not a valid option');
  } 
  return userInput;
}
//plays single round with commputer
function playRound() {
  computerSelection = computerPlay();
  playerSelection = userSelect();
  console.log('player selected ' + playerSelection + ' - cpu selected ' + computerSelection);
  //rock conditions
  if (playerSelection == 'rock' && computerSelection == 'scissors') {
    //player wins
    console.log('rock beats scissors. ' + result[1]);
    plyrScore += 1;
  }
  else if (playerSelection == 'rock' && computerSelection == 'paper') {
    //player loses
    console.log('paper beats rock. ' + result[0]);
    cpuScore += 1;
  }
  else if (playerSelection == 'rock' && computerSelection == 'rock') {
    console.log('rock stalemates rock. ' + result[2]);
  }
  //paper conditions
  if (playerSelection == 'paper' && computerSelection == 'rock') {
    //player wins
    console.log('paper beats rock. ' + result[1]);
    plyrScore += 1;
  }
  else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    //player loses
    console.log('scissors beat paper. ' + result[0]);
    cpuScore += 1;
  }
  else if (playerSelection == 'paper' && computerSelection == 'paper') {
    console.log('paper stalemates paper. ' + result[2]);
  }
  //scissors conditions
  if (playerSelection == 'scissors' && computerSelection == 'rock') {
    //player loses
    console.log('rock beats scissors. ' + result[0]);
    cpuScore += 1;
  }
  else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    //player wins
    console.log('scissors beats paper. ' + result[1]);
    plyrScore += 1;
  }
  else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
    console.log('scissors stalemates scissors. ' + result[2]);
  }
  //if no value is entered into prompt box
  if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
    console.log('Try again!');
  }
}

let cpuScore = 0;
let plyrScore = 0;

function scoreKeep() {
  if (cpuScore >= 5) { 
    cpuScore = 0; //resets score to 0 when 5pts is achieved
    alert('computer wins!' + ' computer score: ' + '5' + ' player score: ' + plyrScore);
  }
  if (plyrScore >= 5) {
    plyrScore = 0;
    alert('player wins!' + ' computer score: ' + cpuScore + ' player score: ' + '5');
  }
}

//need to connect the loop length to score
//need a function for check score
function playGame() {
  for (let i = 0; i <= 9; i++) {
    playRound();
    scoreKeep();
  }
}
