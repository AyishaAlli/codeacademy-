//Selectors - Variables 
let input = 'hey i am a whale';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];


for (let i = 0; i < input.length; i++) {
  //console.log(input[i])
  for (let i = 0; i < vowels.length ; i++){
     // console.log(vowels[i])
      if (input[i] === vowels[i]){
          console.log(i)
      } else {
          console.log('error')
      }
  }
}