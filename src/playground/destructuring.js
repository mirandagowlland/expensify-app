//
// //OBJECT destructuring
//
// console.log ('destructuring');
//
// const person = {
//     name: 'Randags',
//     age: 42,
//     location: {
//         city: 'Berlin',
//         temp: 20
//     }
// };
//
//
// const {name = 'Anonymous', age} = person;
// //equivalent of below two lines, using destructuring
// // const name = person.name;
// // const age = person.age;
//
// //console.log (`${person.name} is ${person.age}.`);
// console.log (`${name} is ${age}.`);
//
// //example renames temp to temperature. Can also set defaults here (see name = above)
// const {city, temp:temperature} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }
// //
// // const book = {
// //     title: 'Ego is the Enemy',
// //     author: 'Ryan Holiday',
// //     publisher: {
// //         name: 'Penguin'
// //     }
// // };
// //
// // const {name:publisherName = 'Self-published'} = book.publisher;
// // console.log (publisherName);
//
//


//ARRAY DESTRUCTURING

const address = ['1299 South Juniper Street', 'Philadelphia', 'Pennsylvania', '90210'];

const [street, city, state = 'New York', zipcode] = address;

console.log(`You are in ${city}, ${state}`);
//console.log(`You are in ${address[1]}, ${address[2]}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , med ] = item;
console.log (`A medium ${itemName} costs ${med}`)
