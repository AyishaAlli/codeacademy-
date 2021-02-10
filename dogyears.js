//Created a variable called myAge with a value of 23.
const myAge = 30;

//Created a variable called earlyYears with a value of 2.
let earlyYears = 2;

/* earlyYears being multiplied by a number then reassigning it to the new number */
earlyYears = earlyYears * 10.5;

/*Subtracted 2 from the variable myAge because its already accounted for in earlyYears - assigned that sum to a new variable called laterYears*/
let laterYears = myAge - 2;

/* multiplying 4 by laterYears to caculate no. of dog years accounted for by my later years. */
laterYears *= 4;

/*Added both early years and later years to get a total of what my dog years would be and assigned this into a new variable called myAgeInDogYears. */
const myAgeInDogYears = laterYears + earlyYears;

/* This creates a variable called MyName. Assigened to it is a string "Ayisha" but also ' .toLowercase ' - returns a string with all lowercase letters. */
var myName = "Ayisha".toLowerCase()

/* logs 'My name is ayisha. I am 23 in human years which is 105 years old in dog years.' */
console.log(`My name is ${myName}. I am ${myAge} in human years which is ${myAgeInDogYears} years old in dog years.`);
