// var - let - const : 


const accountId = 144553;
let accountEmail = "ben@gmail.com";
var accountPassword = "@3!@$%";
accountCity = "xyz";

// We can do operations on this : 

    console.log("AccountId : ",accountId);
    // Here We know we cant change the value of const variable...
    // accountId = 144554;
    // console.log("AccountId : ",accountId);

// To Print something in tabular format we can do so : 
    console.log([accountId , accountEmail , accountPassword , accountCity]);

    console.table([accountId , accountEmail , accountPassword , accountCity])

    // console.table : is mainly used for printing something in tabular format ... 

    accountEmail = "ben1@gmail.com";
    accountPassword = "!@##@@#";
    console.log(accountEmail);
    console.log(accountPassword);

    // Generally we will not be using var for declaring variables ... Issues may arries in functional and block scope ....
