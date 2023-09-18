
//Write an Arrow Function to Return a Boolean if a number is divisible by 10


const isDivisibleBy10 = (number) => {
    return number % 10 === 0;
};

console.log(isDivisibleBy10(20)); // Output: true
console.log(isDivisibleBy10(15)); // Output: false
console.log(isDivisibleBy10(10)); // Output: true
console.log(isDivisibleBy10(7)); // Output: false
