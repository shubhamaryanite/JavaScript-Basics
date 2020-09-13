//example 1- sorting strings
const names=['mario', 'shaun', 'chun-li', 'yoshi', 'lungi'];
names.sort();
console.log(names);
names.reverse();
console.log(names);


//example 2- sorting numbers
const scores=[10, 50, 20, 5, 35, 70, 45];
scores.sort();
//its looking at the first number
//just like considering integers as string 
//so gives wrong answer
console.log(scores);
scores.sort((a,b)=>b - a);
console.log(scores);

//example 3- sorting objects
const players=[
    {player:'mario', scor:50},
    {player:'luigi', scor:30},
    {player:'chun-li', scor:70},
    {player:'crystal', scor:60},
    {player: 'shaun', scor:75}
];
//not able to sort objects
players.sort();
console.log(players);

// players.sort((a,b)=>{
//     if(a.scor > b.scor)
//     {
//         return -1;
//     }
//     else if(b.scor > a.scor)
//     {
//         return 1;
//     }
//     else
//     {
//         return 0;
//     }
// });

//another way to wrie above function
players.sort((a,b)=>b.scor - a.scor);

console.log(players);