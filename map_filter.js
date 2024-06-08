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

const numprices = prices.map((p) => {return parseInt(p.slice(1))});
console.log(numprices);

//const numprices = prices.map((p) => {return (p*90/100)});

const discounted = numprices.map((p) =>{return parseInt(p*0.9)});
console.log(discounted);

const num2 = [4, 26,87,270,877,284];

const oddNums = num2.filter((n) => {return n%2!==0});
console.log(oddNums);

const price2 = [12000, 670,4500,3500,4600, 240]

const les = price2.filter((c) => {return c>500 && c<4000});
console.log(les);

const phonelist =[
    {brand: 'samsung',model: 's24 ultra',price: 136000,color:['black','blue','silver']},
    {brand: 'OnePlus',model: 'nord c3',price: 24000,color:['grey','silver']},
    {brand: 'vivo',model: 'v7',price: 36000,color:['red','yellow']},
    {brand: 'xiaomi',model: 'note 12',price: 56000,color:['black','blue','silver']},

];

const budgetPhones = phonelist.filter((phone) => {return phone.price < 30000});
console.log(budgetPhones);

const list = phonelist.filter((br) => {return br.brand==="samsung"});
console.log(list);

const samsungPhones = phonelist.filter((phone)=> {return phone.brand === "samsung"});
console.log(samsungPhones);

console.log(['a','b','c'].includes('b'));

//filter all phone with blue color.
const color = phonelist.filter((phone) => {return phone.color.includes ("blue")});
console.log(color);