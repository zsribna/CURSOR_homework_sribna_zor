const  apple=15.678;
const banana=123.965;
const tomate=90.2345;

console.log("max= "+ Math.max(apple, banana, tomate));
console.log("min= "+ Math.min(apple, banana, tomate));
let SumPrice=apple+banana+tomate;
console.log(`Sum Price : ${SumPrice}`);
const minPrice=Math.floor(apple)+Math.floor(banana)+Math.floor(tomate); 
console.log(`minPrice : ${minPrice}`);
const maxPrice = Math.ceil((SumPrice / 100)) * 100;
console.log(`maxPrice : ${maxPrice}`);
SumProduct=minPrice % 2 == 0 ? true : false;
console.log(`SumProduct : ${SumProduct}`);
restPrice=500-SumPrice;
console.log(restPrice);
average=(SumPrice/3).toFixed(2);
console.log(average);
discount=Math.random().toFixed(2);
console.log(discount);
const Payment=(SumPrice-discount).toFixed(2);
console.log(Payment);
const Profit =(SumPrice / 2);
const WithoutProfit = (Profit-discount).toFixed(2);
console.log(WithoutProfit)

