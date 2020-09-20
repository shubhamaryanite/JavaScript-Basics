const before=new Date('February 1 2019 7:30:59');
const now=new Date();

console.log(before , before.getTime());
console.log(now.getTime());

//difference between a fixed time and current time
const diff=now.getTime() - before.getTime();
console.log(diff);

//converting it into minutes
const mins=Math.round(diff/ 1000 / 60);
const hours=Math.round(mins/ 60);
const days=Math.round(hours/24);

console.log('minutes: ', mins );
console.log('hours : ', hours );
console.log('days: ', days );

console.log(`This blog was created ${days} days ago`);



//converting timestamps into date objects
const timestamp=4132564324353;
//using date object to convert it into timestamp
console.log(new Date(timestamp));

