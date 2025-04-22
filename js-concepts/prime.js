function isPrime(num) {
    // Check if num is less than 2
    if (num < 2) return false;
    
    // Loop from 2 to the square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // If num is divisible by any number other than 1 and itself
        if (num % i === 0) return false;
    }
    
    // If no divisors found, num is prime
    return true;
}

// Example usage:
const number = 29;
if (isPrime(number)) {
    console.log(`${number} is a prime number.`);
} else {
    console.log(`${number} is not a prime number.`);
}