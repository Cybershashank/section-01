const arr = [6834, 'nice', true, null];

console.log(arr);

const movies = ['ice age','jeene nhi duga','hunger game','jumanji','fighter','batman']
console.log(movies.length);

const myMovie = 'animal';
console.log(myMovie.length);

//indexing

console.log(movies[3]);
console.log(movies[4]);
console.log(movies.at[-1]);
console.log(movies.indexOf('fighter'));
console.log(movies[56]);

//slicing
console.log(movies.slice(1,5));
console.log(movies.slice(3));
console.log(movies.slice(1,50));

//adding new element
movies.push('the dark knight'); //adds element at the end
movies.unshift('the nun'); //adds element at the beginning

console.log(movies);

//removing element
movies.pop(); //remove element from the end
movies.shift(); //remove element from the beginning

console.log(movies);

// adding add removing element from specific position

//movies.splice(1, 2);
//movies.splice(-2, 2);
movies.splice(-2, 1, 'superman','flash');

console.log(movies);