const Name = "Rishi" // redeclaration and reasign Not allowed 
let Age = 27; // Reasign allowed only scope
var Email = "rishidongre519@gmail.com"; // Redeclaration and Reasign Both allowed WIth No Scope 

let accountState; // this should be undefined


/*
    Prefer not to use Var 
    Because of issue in block scope and functional scope
*/

console.table([Name,Age,Email,accountState]);


