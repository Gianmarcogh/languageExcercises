// - 1. Array Operations
console.log('1. Array operations');
var array = [2, 3, 47, 8, 9, 14, 52, 35];
// Head
var head = function (_a) {
    var first = _a[0];
    return first;
};
console.log('HEAD OUTPUT ->', head(array));
// Tail
var tail = function (_a) {
    var rest = _a.slice(1);
    return rest;
};
console.log('TAIL OUTPUT ->', tail(array));
// Init 
var init = function (array) { return array.slice(0, -1); };
console.log('INIT OUTPUT ->', init(array));
// Last
var last = function (array) { return array[array.length - 1]; };
console.log('LAST OUTPUT ->', last(array));
