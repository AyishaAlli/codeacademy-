const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3); //moved this line inside the local scope
    if (random === 0) {
      return 'Marathon';
    } else if (random === 1) {
      return 'Triathlon';
    } else if (random === 2) {
      return 'Pentathlon';
    }
  };
  
  
  const getTrainingDays = event => {
  let days = ''; // Defined Let outside of the if statement 
    if (event === 'Marathon') {
       days = 50; //removed 'let' do its not creating a new variable
    } else if (event === 'Triathlon') {
       days = 100;
    } else if (event === 'Pentathlon') {
       days = 200;
    }
  
    return days;
  };
  
  // The scope of `name` is too tight 
  const name = 'Nala'; // moved this variable outside of the local scope and removed it from the two functions below. added name as the first parameter of each function also. 
  const logEvent = (name, event) => {
    
    console.log(`${name}'s event is: ${event}`);
  };
  
  const logTime = (name,days)  => {
    
    console.log(`${name}'s time to train is: ${days} days`);
  };
  
  const event = getRandEvent();
  const days = getTrainingDays(event);
  // Define a `name` variable. Use it as an argument after updating logEvent and logTime 
  
  
  logEvent( name , event); // added the first parameter of name to each function call.
  logTime( name , days);
  
  const event2 = getRandEvent();
  const days2 = getTrainingDays(event2);
  const name2 = 'Warren';
   
  logEvent(name2, event2);
  logTime(name2, days2);