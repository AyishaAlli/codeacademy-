// Constant variable created of today's forecast
const kelvin = 0;

// create new variable with the value of the prev variable - a 273. logs 20 which is the value of celsius
const celsius = kelvin - 273; 

// create new variable with the value of the prev variable *9/5 + 32. logs 68 which is the value of fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// Math.floor rounds numbers down. Math.ceil rounds up.
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Farenheit.`);