function sumnumber() {
    var num1 = 2;
    var num2 = 4;
    var sum = num1 + num2;
    return sum;  //  Return sum
}

function subtraction() {
    var num3 = 6;
    var num4 = 4;
    var sub = num3 - num4;
    return sub;  //  Return sub
}

// Store function results in variables
var number1 = sumnumber();
var number2 = subtraction();

//  Corrected comparison
if (number1 > number2) {
    console.log("Greater number is " + number1);
} else if (number2 < number1) {
    console.log("Number2 is less than number1");
}


let age = 20; // Global variable

if (age >= 18) {
    let message = "You are an adult."; // Block-level variable (only accessible inside this if block)
    console.log(message);
} else {
    let message = "You are a minor."; // Different block-level variable
    console.log(message);
}


