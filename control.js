// Control structures  dictate how your code executes and allow for decision-making, repetition, and error handling. 
// Conditional Statemens --- if-else , switch

let age = 16

if(age<18){
    console.log("Your age does not permit you to use this service");
}else{
    console.log("Welcome. Enjoy our services!!");
}


let mark = 25
if(mark<0 || mark > 100){
    console.log("Invalid Mark!!");
}else if(mark>75){
    console.log("Grade: A");
}else if(mark>60){
    console.log("Grade: B");
}else if(mark>50){
    console.log("Grade: C");
}else if(mark>40){
    console.log("Grade: D");
}else{
    console.log("Grade: E");
}
// TASK 1: - Re-do this grading system using js switch statement
switch(true){
    case mark <0 || mark>100:
        console.log("Invalid mark")
        break;
    case mark > 75:
        console.log("GRADE A")
}


// Loops / Iterators -- for loop, while loop, do while loop
// loops are used for repetitive tasks where you know the number of iterations beforehand. It has three parts: initialization(starting point), condition(if false - looping stops), and increment/decrement(next step/number/value).
for(let studentNumber = 12; studentNumber<=87; studentNumber++){
    console.log("starting");
    console.log("Currently processing student number "+ studentNumber);
    console.log("ending loop");
}
//TASK 2:  Implement the classic FizzBuzz challenge using a for loop. Iterate from 1 to 100. Print "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both 3 and 5. Otherwise, print the number itself.

// TASK 3: Create a function that takes a temperature value and a unit (Celsius or Fahrenheit) as inputs. Use an if-else statement to check the unit and convert the temperature to the other unit using the appropriate formula. 

// TASK 4: Write a function that takes a number as input. Use a conditional statement (if-else) to determine if the number is even or odd. The function should return "Even" or "Odd" depending on the number

// TASK 5: Vowel Checker: Create a function that takes a character as input. Use an if-else statement chain (or a series of if-else statements) to check if the character is a vowel (a, e, i, o, u) and return "Vowel" if true. Otherwise, return "Consonant" or "Not a letter" (handle non-letter characters).

// TASK 6: Write a function that calulates the total number claps in a factorial patern. The function takes a number as an argument e.g. 5 and logs the total number of claps e.g. 15

// TASK 7: Print the multiplication table.

