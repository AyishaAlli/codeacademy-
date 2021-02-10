// Creates a random number from 0 to 999 rounded down.
let raceNumber = Math.floor(Math.random() * 1000);

//Created a variable and assigned if=t to a Boolean statement. Can either be true or false. 
let earlyRunner = false;

// Created a variable and assigned a radom age to it. 
let runnerAge = 18;

/*Created an if statement to see whether the participent is ann early registant and above the age of 18, therefore added 1000 to their number as early registants recieve numbers obaove 1000.*/
if(earlyRunner && runnerAge > 18){
  console.log(raceNumber + 1000);
} 

/* created an if else statement.*/
if(earlyRunner && runnerAge > 18){ // earlyRunner has to === true and runnerAge has to be over 18 for this console to log. 
  console.log(`Your Race time is at 9:30am and your race number is ${raceNumber + 1000} `);
}  else if (earlyRunner === false && runnerAge > 18){ // earlyRunner has to === false and runnerAge has to be over 18 for this console to log. 
  console.log(`Your Race time is at 11am and your race number is ${raceNumber} `);
}   else if (runnerAge === 18){ // Accounts for those who are exactly 18
  console.log('Please see the registration desk.')
} else { //RunnerAge under below 18 for this console to log.
  console.log(`Your race time is at 12:30pm and your Race Number is ${raceNumber}`);
}
