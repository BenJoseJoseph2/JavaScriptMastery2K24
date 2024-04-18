//Primitive Datatypes goes to stack and Referenced datatypes goes to heap memory
let name = "Ben Jose Joseph";

let name1 = name;
name1 = "Ben 10";
console.log(name1);
console.log(name);

let user1 ={
    name1 : "Ben",
    lastName:"Joseph",
    age:23
}

let user2 = user1;

user2.age = 22;

console.log(user1.age)
console.log(user2.age)