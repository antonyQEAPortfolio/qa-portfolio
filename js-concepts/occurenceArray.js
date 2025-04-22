const numbers = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

// Syntax of reduce function

array.reduce((accumlator , currentvalue) => {
    return accumlator;
}, initialValue);

numbers.reduce((accumlator , currentvalue) => {
    accumlator[currentvalue] = (accumlator[currentvalue] || 0) + 1;
    return accumlator;
}, {});
console.log('The count of each number is:' , count);