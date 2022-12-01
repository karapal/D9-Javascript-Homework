console.log("---------Exercise 1----------\n");
/* 
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

function area( l1 , l2 ) {
    return ( l1 + l2 ) 
};



console.log("\n---------Exercise 2----------\n");
/* 
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

function crazySum( p1 , p2 ) {
    if (p1 === p2) {
    return (p1 + p2)*3;
} else {
    return (p1 +p2);
}
}

let value1 = crazySum(30 , 45);
let value2 = crazySum(25 , 25);
console.log(value1);
console.log(value2);




console.log("\n---------Exercise 3----------\n");
/*
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

function crazyDiff(a1, b1) {
    
    if (a1 >= b1) {
        return a1 - b1;
      }
    
      return b1 - a1;
    }

    let value3 = crazyDiff (55,19);
    console.log (value3);

   
  


console.log("\n---------Exercise 4----------\n");
/* 
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/


function boundary(n) {
    if (n === 400 ) {
        return true
    } else {
        return false
    }

}
let value5 = boundary(400);
console.log(value5);






console.log("\n---------Exercise 5----------\n");
/* 
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/



console.log("\n---------Exercise 6----------\n");
/* 
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/


function check3and7(pN) {
    if (pN % 3 === 0 && pN % 7 === 0){
        console.log("pN is a multiple of 3 or 7");
    } else  {
        console.log("pN is not a multiple of 3 or 7");
    }
}

let value6 = check3and7(5);


console.log("\n---------Exercise 7----------\n");
/* 
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

function reverseString(str){
    return str.split("").reverse().join("");
}

let word1 = reverseString("Javascript");
console.log (word1)

console.log("\n---------Exercise 8----------\n");
/* 
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/


console.log("\n---------Exercise 9----------\n");
/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/




console.log("\n---------Exercise 10----------\n");
/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/


