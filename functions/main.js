// write a function named "add" that adds two numbers

// TODO add function goes here
var answer = add(1,3);
console.log(answer);
answer = add (5, answer);
console.log(answer);


// Write a function named even that returns true
// if a number is even


var result = even(4);
console.log(result);

// function that prints big if the number is greater than 10




// Write a function named numbers which takes two numbers
// and prints the numbers from one to the other
// for example, numbers(1,10) would print 1 through 10

function add (a,b) {
    return a + b;
}
function even (num) {
    return num % 2 == 0;
}
function big (a){
    if (a > 10) {
    console.log("big");
    } else {
        console.log("small");
    }
}
big (14);
big (19);
big (4);