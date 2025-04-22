// verify for single vlaue
function oddEvenChecker(number){
    if (number % 2 === 0 ){
        console.log(`Given number ${number} is even.`);
    } else {
        console.log(`Given number ${number} is odd. `);
    }
}
oddEvenChecker (2);
oddEvenChecker (3);

// verify for multiple vlaue

function oddEvenCheckerString(numberString){
    let numbers = numberString.split(",").map(num => parseInt(num.trim(),10));
    numbers.forEach(number => {
        if(number % 2 === 0){
            console.log(`Given number ${number} is even.`);
        } else {
            console.log(`Given number ${number} is odd.`);
        }
    })
}
oddEvenCheckerString("1,2,3,4,5,6,7,8");

// Using for loop

// function checker(numberString){
//     let numbers = numberString.split(",");
//     for(i=0 ; i< numbers.length ; i++) 
//     {
//         let num = parseInt(numbers[i].trim(),10);        
//             if(num % 2 === 0 ) {
//                 console.log(`Given number ${num} is even`);
//             }else{
//                 console.log(`Given number ${num} is odd`);
//             }
        
//     }
// }
// checker(11,12,13,14,)

function checker(numberString) {
    let numbers = numberString.split(','); // Split the string into an array of string numbers
  
    for (let i = 0; i < numbers.length; i++) {
      let num = parseInt(numbers[i].trim(), 10); // Convert each trimmed string to an integer
  
      if (num % 2 === 0) {
        console.log(num + " is even.");
      } else {
        console.log(num + " is odd.");
      }
    }
  }
  
  // Test the function
  checker("11,12,13,14");