// Problem 1 : Extracting Numbers from a String
let str = "The prices are 50, 100, and 250 dollars";
let number = str.match(/\d+/g).join(",");
console.log(number); // Output: "50,100,250"

/*Explanation:
Uses the regular expression /\d+/g to find all sequences of digits in the string.
match() returns an array of those numbers as strings: ["50", "100", "250"].
join(",") converts the array into a comma-separated string.
This is useful for extracting and formatting numeric data from text. */

// Problem 2: Reversing a String using Built-in Methods

function reverseString(str)
{
    return str.split("").reverse().join("");
}
console.log(reverseString('automation')); // Output: "noitamotua"

/*Explanation:
split("") converts the string into an array of characters.
reverse() reverses the array.
join("") combines the reversed characters back into a string.
This approach is concise and leverages JavaScript’s built-in methods. */

// Problem 3 - Reversing a String using a Loop

function reverseLoop(str){
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseLoop('antony')); // Output: "ynotna"

/*
Explanation:
This function manually constructs the reversed string by iterating from the end to the start of the original string.
It’s a more explicit method and demonstrates control over loop logic, useful for understanding the reversal process step-by-step.*/