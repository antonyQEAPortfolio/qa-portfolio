// Given string swiss
// Example usage
//let inputString = "swiss";
// console.log(firstNonRepeatingCharacter(inputString)); // Output: "w"

let inputString = "swiss" ;
function nonRepeateChar(str){
    for(let i=0; i< str.length ; i++){
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return str[i];
        }
    }
    return null;
}
console.log(nonRepeateChar(inputString));