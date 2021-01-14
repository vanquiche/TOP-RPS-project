
      let choices = ['rock', 'paper', 'scissors'];

      function computerPlay() {
        // random number between 1 and 3. 
        // * by 3 to ensure number does not exceed 3
        let randomize = Math.floor(Math.random() * 3); 
        return choices[randomize]; 
      }
      //.toLowerCase() for case insensitive
      //need to loop the prompt until rock paper or scissors is entered
      function userSelect() {
      let choice = prompt('enter rock, paper, or scissors').toLowerCase();
      switch (choice) {
        case 'rock':
        case 'paper':
        case 'scissors':
          //console.log(playerSelection);
          return playerSelection = choice; //stores the input into var
          //return 'you selected ' + choice;
          break;
        case '': //if no value is entered
          console.log('no value entered');
          return;
      }
    }
    let playerSelection = '';
    let computerSelection = '';
    let result = ['player loses!', 'player wins!', 'draw'];

    function playRound() {
      computerSelection = computerPlay();
      playerSelection = userSelect(); 
      console.log('player selected ' + playerSelection + ' - cpu selected ' + computerSelection);
      ////////
      //rock conditions
      if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log('rock beats scissors. ' + result[1]);
      }
      else if (playerSelection == 'rock' && computerSelection == 'paper') {
            console.log('paper beats rock. ' + result[0]);
          }
      else if (playerSelection == 'rock' && computerSelection == 'rock') {
                console.log('rock stalemates rock. ' + result[2]);
          }
      /////////
      //paper conditions
      if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log('paper beats rock. ' + result[1]);
      }
      else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        console.log('scissors beat paper. ' + result[0]);
      }
      else if (playerSelection == 'paper' && computerSelection == 'paper') {
        console.log('paper stalemates paper. ' + result[2]);
      }
      //////////
      //scissors conditions
      if (playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log('rock beats scissors. ' + result[0]);
      }
      else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log('scissors beats paper. ' + result[1]);
      }
      else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        console.log('scissors stalemates scissors. ' + result[2]);
      }
    }

    //convert selection into number by using string.length
    //using an if statement
    //if selection is equal to 'this number' and the sum of both numbers (player and cpu) is equal 
    //to a specific sum then return the results 
    //rock = 4
    //paper = 5
    //scissors = 8
    //
    //user -  cpu
    //
    //rock vs paper = 9;      cpu wins
    //rock vs scissors = 12;  player wins
    //rock vs rock = 8 ;      draw