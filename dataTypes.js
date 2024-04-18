// To treat all versions of js as newer version we uses this way : 
"use strict"

/**
 * DataTypes: 
    * number
    * string
    * boolean
    * undefined
    * null 
 */

let rNoll = 23;
const name = "Ben Jose Joseph";
const address = "xyz";
let age = 22;
let isMarried = false;
let isOcuppied ;
let isAvailable = null;

// We can use typeof operator to check the data types of the variables that we are declared :

console.log(typeof rNoll);
console.log(typeof name);
console.log(typeof address);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof isOcuppied);
console.log(typeof isAvailable);


// Symbols in JS: 
    let passcode = Symbol("!@!#@");
    let passcode1 = Symbol("!@!#@");

    // We can check whether this gives true as output :
    console.log(passcode === passcode1);
    // We will be receiving false because the Symbol will generate the seperate code for each one . 