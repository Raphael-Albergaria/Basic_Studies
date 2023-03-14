const Address = require('./Address');
const Person = require('./Person');

const adds = new Address('7 de Setembro', 20, 'Centro', 'Goiania', 'Goias');

const john = new Person('John Doe', adds);

console.log(john);
console.log(john.address.fullAddress());
