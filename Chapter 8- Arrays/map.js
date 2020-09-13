const prices=[10,20,30,40,50,5,23];

const salePrices = prices.map((price)=>{
    return price/2;
});

//const salePrices = prices.map(price=> price/2);
console.log(salePrices);

const products=[
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red-shells', price: 50}
];

const saleProducts=products.map((product)=>{
    if(product.price > 30)
    {
        return {name:product.name, price: product.price/2};
    }
    else{
        return {name:product.name, price: product.price};
    }
});

console.log(saleProducts);
