const products=[
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red-shells', price: 50},
    {name: 'mushroom', price: 5}
];

// //returns array
// const filtered=products.filter(product=>product.price > 20);
// console.log(filtered);

// //work on array
// const promos= filtered.map(product =>{
//     return `the ${product.name} is ${product.price/2} pounds`;
// });

// console.log(promos);


//another way to do above method

const promos=products
    .filter(product => product.price > 20)
    .map(product => `the ${product.name} is ${product.price/2} pounds`);
console.log(promos);