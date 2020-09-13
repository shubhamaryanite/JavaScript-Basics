const scores=[10,20,30,40,50,5,23];

//filter method
const filterScores=scores.filter((score)=>{
    return score>25;
});

console.log(filterScores);

const users=[
    {user: 'shaun', premium: true},
    {user: 'yoshi', premium: false},
    {user: 'mario', premium: false},
    {user: 'chun-li', premium: true}
];

// const premiumUsers=users.filter(user=>{
//     return user.premium;
// });
const premiumUsers=users.filter(user=> user.premium);

console.log(premiumUsers);
