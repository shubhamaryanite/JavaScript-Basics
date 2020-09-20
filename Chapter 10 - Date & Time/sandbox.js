//dates & times
const now = new Date();
console.log(now);
console.log(typeof now);

//years, moths, day, times
console.log('getFullYear : ', now.getFullYear());
console.log('getMonth : ', now.getMonth());
console.log('getDate : ', now.getDate());
console.log('getDay : ', now.getDay());


console.log('getHours : ', now.getHours());
console.log('getMinutes : ', now.getMinutes());
console.log('getSeconds : ', now.getSeconds());


//timestamps
//show no of milliseconds since 1st January 1970
console.log('timestamp : ', now.getTime());

//date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());


