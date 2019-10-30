// 3. Clone Merge
console.log('3. Clone Merge')
const user = {
    name: 'Pedro',
    surmane: 'Lorenzo',
    age: 23,
    address: {
        country: 'Spain',
        city: 'Un lugar',
        postalCode: 444444,
    },
    email: 'holaaa@gmail.com',
}

const a = {name: "Maria", surname: "Ibañez", country: "SPA"};
const b = {name: "Luisa", age: 31, married: true};

// Clone 

const clone = object => Object.assign({}, object);

console.log('CLONE OUTPUT ->',clone(user));


// Merge

const merge = (source, target) => Object.assign(target, source);

console.log('MERGE OUTPUT ->',merge(a,b))