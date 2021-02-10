// Created and defined a variable
let userName = 'Ayisha';

//Shorthand if statement
userName ? console.log(`Hello ${userName}!`)
: console.log('Hello!');

//Created and defined a variable
let userQuestion = "Will it rain tomorrow?";

//logs sentence + whatever is in userQuestion
console.log(`Enter your question: ${userQuestion}`);

/*created another variable. Math.random() returns a value between 0 (inclusive) and 1 (exclusive). Math.floor() ensures we get back a whole no. (Rounded down)
In order to make this set of numbers range from 0 (inclusive) to 8 (exclusive) we can multiple the returned value by 8. */
let randomNumber = Math.floor(Math.random() * 8);

console.log(randomNumber);

//created an empty string variable, as this will change everytiime 
let eightBall = '';


// Swith, which is an alternative for if...else if statements. when a radom number is picked e.g case 5, it will produce the answer that is within it. and then stop there(Hence the break; line)
switch (randomNumber){
 case 0:
  eightBall = 'It is certain';
  break;
 case 1:
  eightBall = 'It is decidedly so';
  break;
case 2:
  eightBall = 'Reply hazy try again';
  break;
case 3:
  eightBall = 'Cannot predict now';
  break;
case 4:
  eightBall = 'Do not count on it';
  break;
case 5:
  eightBall = 'My sources say no';
  break;
case 6:
  eightBall = 'Outlook not so good';
  break;
  case 7:
  eightBall = 'Signs point to yes';
  break;
defualt:
 console.log('There seems to be an error, please try again.')
 break;
}
 
//logs Magic Eight Ball : 'And whatever statement is selected from the switch. 
console.log(`Magic Eight Ball: ${eightBall}`)




