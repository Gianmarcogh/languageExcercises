// 2. Concat
console.log('2. Concat');

const firstArray = [2,3,4,5,6,7,8];
const secondArray = [7,5,3,4,6,9,1];
const thirdArray = ['a', 'b', 'c'];

const concat = (...arrays) => {
    let concatedArrays = [];
    arrays.forEach( array => {
        concatedArrays = concatedArrays.concat(array);
    });
    return concatedArrays;
};

console.log('CONCAT OUTPUT ->', concat(firstArray, secondArray, thirdArray));
