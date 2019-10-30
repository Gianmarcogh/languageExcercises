// - 1. Array Operations
console.log('1. Array operations');

const array = [2,3,47,8,9,14,52,35];

// Head

const head = ([first]) => first;

console.log('HEAD OUTPUT ->', head(array));
 
// Tail

const tail = ([ , ...rest]) => rest;

console.log('TAIL OUTPUT ->', tail(array));

// Init 

const init = (array) => array.slice(0, -1);

console.log('INIT OUTPUT ->', init(array));

// Last

const last = (array) => array[array.length-1];

console.log('LAST OUTPUT ->', last(array));