/* 
# First Unique Character using `reduce` in JavaScript

## Problem
Given a string, return the **first character that does not repeat**.  
If all characters repeat, return `null`.

## Approach

1. Use `reduce()` to create a frequency map (`{ char: count }`)
2. Use `find()` to return the first character that appears only once
*/

function firstUniqueCharUsingReduce(str) {
    const charCount = str.split('').reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});

    return str.split('').find(char => charCount[char] === 1) || null;
}

// Example
console.log(firstUniqueCharUsingReduce("aswwaiss")); // Output: "i"