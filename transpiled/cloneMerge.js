// 3. Clone Merge
console.log('3. Clone Merge');
var user = {
    name: 'Pedro',
    surmane: 'Lorenzo',
    age: 23,
    address: {
        country: 'Spain',
        city: 'Un lugar',
        postalCode: 444444,
    },
    email: 'holaaa@gmail.com',
};
var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };
// Clone 
var clone = function (object) { return Object.assign({}, object); };
console.log('CLONE OUTPUT ->', clone(user));
// Merge
var merge = function (source, target) { return Object.assign(target, source); };
console.log('MERGE OUTPUT ->', merge(a, b));
