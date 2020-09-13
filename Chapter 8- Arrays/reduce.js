//reduce method
const scores=[10,20,60,40,70,90,30];
//finding total numbers in array greater than 50
//return number not whole array
//acc-each item
//curr-current value/element in array
const result=scores.reduce((acc,curr)=>{
    if(curr>50)
    {
        acc++;
    }
    return acc;
}, 0);
//initial value of acc=0
console.log(result);


//return total score scored by mario
const score=[
    {player:'mario', scor:50},
    {player:'yoshi', scor:30},
    {player:'mario', scor:70},
    {player:'crystal', scor:60},
    {player:'mario', scor:50},
    {player:'yoshi', scor:30},
    {player:'mario', scor:70},
    {player:'crystal', scor:60},
    {player:'mario', scor:50},
    {player:'yoshi', scor:30},
    {player:'mario', scor:70},
    {player:'crystal', scor:60},
    {player:'mario', scor:50},
    {player:'yoshi', scor:30},
    {player:'mario', scor:70},
    {player:'crystal', scor:60}
];

const marioTotal=score.reduce((acc,curr)=>{
    if(curr.player === 'mario')
    {
        acc+=curr.scor;
    }
    return acc;
}, 0);

console.log(marioTotal);


//find method
//returns the value of first element

const marks=[12,2,32,10,20,60,40,70,90,30];
//find first value greater than 50

const firstHighScore=marks.find((sco)=>{
    return sco > 50;
});

console.log(firstHighScore);
