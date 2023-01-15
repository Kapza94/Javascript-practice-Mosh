//hour 
//if hour is between 6am and 12pm : display Good morning 
//If between 12PM and 6PM : display Good evening
//otherwise display good evening. 

let hour = 10;// This is my hardcoded time and it works by telling me the time. 

if  (hour >= 6 && hour < 12){
    console.log('Good morning');
}
   else if (hour >= 12 && hour < 18){
    console.log('Good Afternoon');
}
   else
    console.log('Good Evening');
