// STEP 1 GET USERS CHOICE 

const getUserChoice = userInput => {

    userInput = userInput.toLowerCase();
  
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput;
    } else if (userInput === 'bomb'){
      return userInput
    } else {
      console.log('Error, Please enter ROCK, PAPER or SCISSORS.')
    };
  };
  //console.log(getUserChoice('rock'));
  
  // STEP 2 GET COMPUTERS CHOICE
  let getComputerChoice = () => {
      let randomNumber = Math.floor(Math.random()*3); 
      switch (randomNumber){
        case 0 :
        return  'rock';
          break;
        case 1 :
          return 'paper';
          break;
        case 2 :
         return 'scissors';
          break;
        default :
         return'Error, Please try again Later.'
          break; 
  }
  }
  
  //console.log(getComputerChoice());
  
  // STEP 3 COMPARE THE CHOICES AND DETERMINE WINNER 
  
  let determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice){
      return 'Tie! Try again.';
    }
    if (userChoice === 'rock'){
      if (computerChoice === 'paper'){
        return 'You lose! Better luck next time.'
        }else {
          return 'Well done. You win!'
        }
    } 
    if (userChoice === 'paper'){
      if (computerChoice === 'scissors'){
        return 'You lose! Better luck next time.'
        }else {
          return 'Well done. You win!'
        }
    }
    if (userChoice === 'scissors'){
      if (computerChoice === 'rock'){
        return 'You lose! Better luck next time.'
        }else {
          return 'Well done. You win!'
        }
    }
    if (userChoice === 'bomb'){
      return 'WINNER WINNER CHICKEN DINNER'
    }
  }
  
  
  
  
  // STEP 4 Start the program and display the results.
  
  let playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log(`Your go: ${userChoice}`);
    console.log(`Computer's go : ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  
  };
  
  playGame();
  