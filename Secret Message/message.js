let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// remove the last string of the array
secretMessage.pop();

// add the words to and Program as separate strings
secretMessage.push('to', 'program');

//Change the word easily to the word right
secretMessage[7] = 'right';

//remove the first string of the array
secretMessage.shift();

// add the string Programming to the beginning of the array
secretMessage.unshift('Programming');

// remove the strings get, right, the, first, time,, and replace them with the single string 'know'. array.splice(indexToStart, numberOfIndices, 'stringToAdd');
secretMessage.splice(6,5, 'know')

//use console.log() and .join() to print the secret message as a sentence.
console.log(secretMessage.join(' '))