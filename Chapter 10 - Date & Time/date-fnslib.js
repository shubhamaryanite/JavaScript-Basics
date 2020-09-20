//https://date-fns.org/docs/Getting-Started
//above sites for knowing tokens for using inbuilt functions
//of dates and times from online fns library 

const now=new Date();

//check if certain date is today
//returns boolean
console.log(dateFns.isToday(now));

const m=new Date(4132514335);
console.log(dateFns.isToday(m));

//foramtting options
//1st argument - time(here it is now)
//2nd argument - tokens from site
console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMM'));
console.log(dateFns.format(now, 'dddd'));
console.log(dateFns.format(now, 'Do'));

console.log(dateFns.format(now, 'dddd Do MMMM YYYY'));


///EARLIER COMPARED TIMESTAMP BY SUBTRACTING
const before=new Date('September 1 2020 12:00:00');
//inbuilt function to compare timestamp
//in this 3rd argument is optional
console.log(dateFns.distanceInWords(now, before)); 

//3rd argument will add ago keyword if it is past 
console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));