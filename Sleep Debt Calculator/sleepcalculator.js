// creates a constant variable called getSleepHours and assigns a parameter of 'day' to it. each if statement represents a day of the week and return the amoount of hours sleep i got that day.
const getSleepHours = day => {
    if (day === 'monday'){
      return 8;
    } else if (day === 'monday'){
      return 6;
    } else if (day === 'tuesday'){
      return 5;
    } else if (day === 'wednesday'){
      return 9;
    } else if (day === 'thursday'){
      return 5;
    } else if (day === 'friday'){
      return 4;
    } else if (day === 'saturday'){
      return 5;
    } else if (day === 'sunday'){
      return 5;
    } else {
      return 'Error'
    }
  };
  // console.log(getSleepHours('tuesday'));
  
  //creates a constant variable called getActualSleepHour with no parameters. all hours are added together and stored in a variable called sum hich is the returned. 
  const getActualSleepHours = () => {
   let sum = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
   return sum ;
  }
  // console.log(getActualSleepHours());
  
  
  // created a new function with the variable name of getIdealSleepHours. created another variable within that function called idealHours and set that to 7. I then return that value multiplied by 7 (represtenting the days of the week)  
  /*
  const getIdealSleepHours = idealHours => {
    idealHours * 7;
    return idealHours;
  }
  */
  const getIdealSleepHours = () => {
    const idealHours = 7;
    return idealHours * 7;
  }
  // console.log(getIdealSleepHours(2));
  
  
  // created another variable with no params. within that created two more variables and set there contents to be the codes we created above. then use if / else if statements to let the use know whether they got enough sleep or too little. 
  const calculateSleepDebt = () => {
   const actualSleepHours = getActualSleepHours();
   const idealSleepHours = getIdealSleepHours(77);
   if (actualSleepHours === idealSleepHours){
     console.log(`You got ${actualSleepHours} hours of sleep which is the perfect amount!`)
   } else if (actualSleepHours > idealSleepHours){
     console.log(`You got ${actualSleepHours} hours which is more than needed.`)
   } else if (actualSleepHours < idealSleepHours){
     console.log(`You got ${actualSleepHours} hours of sleep. you should get some more rest!`)
   }
  }
  
  calculateSleepDebt();
  // Hows comes this prints in the console but getIdealSleep(); does not????