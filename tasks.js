
//JavaScript variables are containers for storing data values.

var x = 5;
var y = 6;
var z = x + y;
console.log("variable Z ="+z);

// Numbers: with and without decimals
var num1 = 3.14; 
var num2 = 3; 

console.log("Number with decimal:", num1);
console.log("Number without decimal:", num2);


// Floating point precision issue
var sum = 0.2 + 0.1;
console.log("0.2 + 0.1 =", sum); // Output: 0.30000000000000004

// Strings: single and double quotes
var car1 = "Volvo XC60"; 
var car2 = 'Volvo XC60'; 

console.log("Car Name 1:", car1);
console.log("Car Name 2:", car2);

// String length property
var text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log("Length of text:", text.length);

// Array: Storing multiple values
var arr =[ "rose","lily","dasiy","suflower"];
console.log("arr is " + arr);
console.log("arrindex is " + arr[1]);
// adding n ew element in arr 
arr[4]= "bubble bee";
var fishmarket= arr[ 4];
console.log ('new entery is'+ arr[4]);
console.log ('new entery is'+  fishmarket);


// object from arr
var arr =[ {name:"rose",flower:"lily"},"dasiy","suflower"];
console.log (arr);
console.log (arr[1]);
console.log (arr[0]);
console.log (arr[2]);

//Adding Objects with Keys and Values
var fishmarket = [];

fishmarket.push({ name: "Salmon", price: 500 });
fishmarket.push({ name: "Tuna", price: 700 });

console.log(fishmarket);

//Adding Data Using unshift()
var arr = ["rose", "lily"];
arr.unshift("daisy");

console.log(arr);  
// Output: [ 'daisy', 'rose', 'lily' ]