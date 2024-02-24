const nums = [2, 3, 4, 5, 6, 7, 8];
const arr1 =[];

for (let i of nums){
    arr1.push(i**2);

}
    
console.log(arr1);

const result = nums.map((n) => {return n**2});
console.log(result);

const prices = ['$567.78','$3456.56','$888.90','$5678.7876'];

console.log(parseInt('$567.78'.slice(1)));

const numprices = prices.map((p) => {return parseInt(p.slice(1))})
console.log(numprices);

//const numprices = prices.map((p) => {return (p*90/100)});

const discounted = numprices.map((p) =>{return parseInt(p*0.9)});
console.log(discounted);