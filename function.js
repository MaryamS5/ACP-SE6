

// parameter function
//Function Scope:

function sum( a,b){
return a+b;


};
console.log(sum(2,4));
//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//globle Scope:

var name=" sarah Khan";
var sap= 456;
var subject="computer Science";
function data() {  // No need for parameters
    return `Name: ${name}, SAP: ${sap}, Subject: ${subject}`;
}

console.log(data());  

var name=" sarah Khan";
var sap= 456;
var subject="computer Science";
function data() {  // No need for parameters
    return name="sarah khan",sap=456,subjuct="computer";
}
console.log( data.name);
console.log(data.subject);
