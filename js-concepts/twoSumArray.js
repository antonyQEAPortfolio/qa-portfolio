// Problem 1: Two Sum - Return indices of two numbers that add up to a target

/*
    Input: [2, 5, 6, 7], target = 9
    Expected Output: [0, 3] // because 2 + 7 = 9

    Approach:
    - Use two nested loops to compare all possible pairs
    - If a pair adds up to the target, return their indices
*/

const num = [ 2,5,6,7];
const target = 9 ; // output as [0,3]
function twoSum( num,target){
    for (let i = 0 ; i < num.length ; i++) {
        for (let j =0 ; j < num.length ; j++){
            if(num[i] + num[j] === target) {
                return[i,j];
            }
        }
    }
}
console.log(twoSum(num,target));