// # Functions Exercises

// Print your answers to the console.

// **1. Add Up.**
// Create a function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// Examples:
// * sumIntFrom1ToN(4) ➞ 10
// * sumIntFrom1ToN(13) ➞ 91
// * sumIntFrom1ToN(600) ➞ 180300


function AddUp(number) {
    return number && number + AddUp(number -1);
}


console.log(AddUp(4));
console.log(AddUp(13));
console.log(AddUp(600));
console.log(AddUp(1000));

// ANSWER: It prints 
// 10
// 91
// 180300
// 500500

// **2. Cubed.**
// Create a function that takes in three numbers and returns the sum of its cubes.
// Examples:
// * sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// * sumOfCubes(2) ➞ 8
// * sumOfCubes() ➞ 0
function SumOfCubes(number1, number2, number3) {
    return (number1**3) + (number2**3) + (number3**3);
}
console.log(SumOfCubes(1, 5, 9));

// ANSWER: It prints 855


// **3. String Check.**
// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.

// Examples:
// * isStrStartOfWord("bu", "button") ➞ true
// * isStrStartOfWord("tri", "triplet") ➞ true
// * isStrStartOfWord("beau", "pastry") ➞ false


function isStrStartOfWord(string, word) {
    if (string = word.startsWith(string))
     {return true; } 
    
     return false;
}
console.log(isStrStartOfWord("bu", "button"));
console.log(isStrStartOfWord("tri", "triplet"));
console.log(isStrStartOfWord("beau", "pastry"));

// ANSWER: it prints 
// true
// true
// false

// **4. Less Than or Equal to Zero?**
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

// Examples:
// * isLEQZero(3) ➞ false
// * isLEQZero(0) ➞ true
// * isLEQZero(-4) ➞ true
// * isLEQZero(10) ➞ false

function isLEQZero(numberX) {
    if (numberX <= 0)
     {return true;}
    
     return false;
    
}
console.log(isLEQZero(3));
console.log(isLEQZero(0));
console.log(isLEQZero(-4));
console.log(isLEQZero(10));

// ANSWER: It prints
// false
// true
// true
// false

// **5. Count Occurrences.**
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

// Example:
// * countOccurrences("this is a string", "i") ➞ 3

function countOccurrences(string, letter) {
    let count = 0;
    for (let i = 0; i < string.length; i += 1) {
        if (string[i] === letter) {
            count += 1;
        }
    }
    return count;
}

console.log(countOccurrences("this is a string", 'i'));
console.log(countOccurrences("today is Wednesday", 'a'));
console.log(countOccurrences("Honolulu is the place to be", 'e'));
// ANSWER: it prints
// 3
// 2
// 3

// **6. X To The Power of X.**
// Create a function that takes a base number and an exponent number and returns the calculation. **NB:** All test inputs will be positive integers.

// Examples:
// * calcBaseToExponent(5, 5) ➞ 3125
// * calcBaseToExponent(10, 10) ➞ 10000000000
// * calcBaseToExponent(3, 3) ➞ 27

function calcBaseToExponent(num1, num2) {
     return Math.pow(num1, num2)   
    }

console.log(calcBaseToExponent(5, 5));
console.log(calcBaseToExponent(10, 10));
console.log(calcBaseToExponent(3, 3));


    // ANSWER: it prints
    // 3125
    // 10000000000
    // 27

// **7. Dog Years.**
// Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the dog's age in human years. Calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.

// Example:
// * dogAge(4) ➞ "Your doggo is 28 years old in dog years!"

function dogAge(years) {
    return `Your doggo is ${years * 7} old in dog years!`
}
console.log(dogAge(4));

// ANSWER: it prints console.log(calcBaseToExponent(5, 5));

// **8. A Lifetime Supply...**
// You just won a lifetime supply of your favourite snack! The snack company needs to calculate what that actually means and how much they need to give you over your "lifetime".  Create a function to help you calculate that amount for yourself to make sure you get the right amount. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant maximum age of 100. 

// Examples:
// * calcLifetimeSupply(25, 2) ➞ "The snack company should provide you with 54,788 units, until you are a ripe old age of 100. Happy snacking!"

// * calcLifetimeSupply(40, 3) ➞ "The snack company should provide you with 65,745 units, until you are a ripe old age of 100. Happy snacking!"

function calcLifetimeSupply(age, dailyAmount) {
    let yearlyAmount = dailyAmount * 365;
    let centuryAmount = yearlyAmount * 100;
    let lefLifeAmount = centuryAmount - (age * yearlyAmount);
    return `"The snack company should provide you with ${lefLifeAmount} units, until you are a ripe old age of 100. Happy snacking!"`
}
console.log(calcLifetimeSupply(25, 2));
console.log(calcLifetimeSupply(40, 3));

// ANSWER: it prints
// "The snack company should provide you with 54750 units, until you are a ripe old age of 100. Happy snacking!"
// "The snack company should provide you with 65700 units, until you are a ripe old age of 100. Happy snacking!"

// **Bonus:** 
// 1) Accept a third argument for maximum age (just in case the snack company has a particular maximum age cut off). 
function calcLifetimeSupply1(age, dailyAmount, maxAge) {
    let yearlyAmount = dailyAmount * 365;
    let maxAmount = yearlyAmount * maxAge;
    let lefLifeAmount = maxAmount - (age * yearlyAmount);
    return `"The snack company should provide you with ${lefLifeAmount} units, until you are a ripe old age of ${maxAge}. Happy snacking!"`
}
console.log(calcLifetimeSupply1(25, 2, 80));
console.log(calcLifetimeSupply1(40, 3, 70));

// Answer: it prints 
// "The snack company should provide you with 40150 units, until you are a ripe old age of 100. Happy snacking!"
// "The snack company should provide you with 32850 units, until you are a ripe old age of 100. Happy snacking!"



// 2) Accept floating point values for amount per day and round the result (in case the snack company has some weird average calculation for amount per day).

//     * calcLifetimeSupply(32, 0.58, 65) ➞ "The snack company should provide you with 6991 units, until you are a ripe old age of 65. Happy snacking!"

function calcLifetimeSupply2(age, dailyAmount, maxAge) {
    let yearlyAmount = dailyAmount * 365.25;
    let maxAmount = yearlyAmount * maxAge;
    let leftLifeAmount = maxAmount - (age * yearlyAmount);
    return `"The snack company should provide you with ${Math.ceil(leftLifeAmount)} units, until you are a ripe old age of ${maxAge}. Happy snacking!"`
}
console.log(calcLifetimeSupply2(32, 0.58, 65));
console.log(calcLifetimeSupply2(40, 3.2, 70));



// **9. Where's Waldo?**
// Create a function that takes a string and returns true if Waldo is found, and false if he's not.

// Examples:
// * isWaldoHere("is there a wal here?") ➞ false
// * isWaldoHere("I found you Waldo!") ➞ true
// * isWaldoHere("Wait, don't you mean Wally?") ➞ false
// * isWaldoHere("waldo is here") ➞ true

function isWaldoHere(string) {
 
    return string.toLowerCase().includes("waldo"); 
    
}


console.log(isWaldoHere("is there a wal here?"));
console.log(isWaldoHere("I found you Waldo!"));
console.log(isWaldoHere("Wait, don't you mean Wally?"));
console.log(isWaldoHere("waldo is here"));

// ANSWER: it prints 
// false
// true
// false
// false


// **10. Pie.**
// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:

// * Total number of slices.
// * Number of recipients.
// * How many slices each person gets.

// Examples:
// * isEqualSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices

// * isEqualSlices(8, 3, 2) ➞ true
// * isEqualSlices(8, 3, 3) ➞ false
// * isEqualSlices(24, 12, 2) ➞ true


function isEqualSlices(slices, recipients, sliceXPerson) {
    if (recipients * sliceXPerson <= slices) {
             return true;
            } else {
                return false; 
            }                 
} 
console.log(isEqualSlices(11, 5, 3));
console.log(isEqualSlices(8, 3, 2));
console.log(isEqualSlices(8, 3, 3));
console.log(isEqualSlices(24, 12, 2));

// **11. XO**
// Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.

// Notes:

// * Return a boolean value (true or false).
// * The string can contain any character.
// * When neither an x nor an o is in the string, return true.

// Examples:
// * isEqualNumXandO("ooxx") ➞ true
// * isEqualNumXandO("xooxx") ➞ false
// * isEqualNumXandO("ooxXm") ➞ true (case insensitive)
// * isEqualNumXandO("zpzpzpp") ➞ true (returns true if no x and o)
// * isEqualNumXandO("zzoo") ➞ false

function isEqualNumXandO(string) {
     string = string.toLowerCase();
     let letters = string.split("");
     let countX = letters.reduce( function( num, val ) {
        return num + (val === 'x');
      }, 0);
      let countO = letters.reduce( function( num, val ) {
        return num + (val === 'o');
      }, 0);

      if ( countX == countO ) {
        return true;
      } else {
        return false;
      }

}


console.log(isEqualNumXandO("ooxx"));
console.log(isEqualNumXandO("xooxx"));
console.log(isEqualNumXandO("ooxXm"));
console.log(isEqualNumXandO("zpzpzpp"));
console.log(isEqualNumXandO("zzoo"));

// ANSWER: it prints 
// true
// false
// true
// true
// false

// **12. isPrime?**
// Create a function that returns true if a number is a prime number, and false if it's not. **NB:** a prime number is any positive integer *greater than 1*, which is *only evenly divisible by two divisors: itself and 1*. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.

// Examples:
// * isPrime(7) ➞ true
// * isPrime(9) ➞ false
// * isPrime(10) ➞ false


const isPrime = num => {
    for (let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }
  console.log(isPrime(7));
  console.log(isPrime(9));
  console.log(isPrime(10));

// ANSWER: it prints
// true
// false
// false

// **13. Validate Email.**
// Create a function that takes a string, checks for valid email address syntax, and then returns either true or false accordingly.

// NOTE: email syntax is more complicated than you might think (see https://en.wikipedia.org/wiki/Email_address#Syntax), so we do not expect you to cover all cases! Just work your way through the below simplified validation criteria:

// * The string must contain exactly one "@" character
// * The string must contain at least one "." character
// * The "." and the "@" must be in the appropriate places:
//     * neither "." nor "@" can be the last character
//     * "." can neither be directly before, nor directly after, "@"
//     * there cannot be consecutive "." characters
//     * "@" must have at least one character in front of it

// Examples:
// * "j@example.com" is valid while "@example.com" is invalid
// * e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid
// * e.g. "john..smith@email.com" and "john.@email.com" and "john@.email.com" are all invalid

// **Good Luck & Enjoy :)**

const EmailValidation = (email)  => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}
      
console.log(EmailValidation("j@example.com")); 
console.log(EmailValidation("john.smith@com"));
console.log(EmailValidation("@example.com")); 
console.log(EmailValidation("john.smith@email.com")); 
console.log(EmailValidation("john..smith@email.com")); 

// ANSWER: it prints
// true
// false
// false
// true
// false