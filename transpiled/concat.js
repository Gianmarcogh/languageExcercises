// 2. Concat
console.log('2. Concat');
var firstArray = [2, 3, 4, 5, 6, 7, 8];
var secondArray = [7, 5, 3, 4, 6, 9, 1];
var thirdArray = ['a', 'b', 'c'];
var concat = function () {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    var concatedArrays = [];
    arrays.forEach(function (array) {
        concatedArrays = concatedArrays.concat(array);
    });
    return concatedArrays;
};
console.log('CONCAT OUTPUT ->', concat(firstArray, secondArray, thirdArray));
