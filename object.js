const user ={name: 'raju', email: 'raju@mail.com', password: 'raju4567'};

console.log(user.name);
console.log(user.email);
console.log(user['password']);

console.log(Object.keys(user));
console.log(Object.values(user));

user.password ='hdfysgjhjd';

console.log(user);
user.address = 'lucknow';
console.log(user);

const smartphone ={
    brand: 'samsung',
    model: 's24 ultra',
    price: 136000,
    color:['black','blue','silver']
};
console.log(smartphone.color.length);

smartphone.color[2] ='white';
console.log(smartphone.color);

smartphone.color.push('red');
console.log(smartphone.color);

const phonelist =[
    {brand: 'samsung',model: 's24 ultra',price: 136000,color:['black','blue','silver']},
    {brand: 'OnePlus',model: 'nord c3',price: 24000,color:['grey','silver']},
    {brand: 'vivo',model: 'v7',price: 36000,color:['red','yellow']},
    {brand: 'xiaomi',model: 'note 12',price: 56000,color:['black','blue','silver']},

];
console.log(phonelist.length);
console.log(phonelist[0].price);
console.log(phonelist[2].color[1]);
