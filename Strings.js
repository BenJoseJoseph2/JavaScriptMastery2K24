const name = "Ben Jose Joseph";
const age = 22;

console.log("My Name is" + " " + name + " "+ " and i belongs to " + age);

// String interpolation : 

console.log(`My name is ${name}`);

// String operations : 

const designation = `Javascript Developer`;

console.log(designation[0]);
console.log(designation.__proto__);

console.log(designation.length);
console.log(designation.charAt(0))
console.log(designation.toUpperCase())
console.log(designation.toUpperCase())
console.log(designation.trim())
console.log(designation.replace('Javascript','JS'));
console.log(designation.indexOf('D'));
console.log(designation.substring(0,3))

// Last index is not included in fetching the value from the variable:
const newString = designation.slice(0,4);
console.log(newString);
// What is the difference between slice() and substring(): We can provide negative index .
