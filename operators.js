/// operators -- arithmetics + - * / ** % , comparison operators > < >= <= == ==== , logical operators AND && , OR  ||

console.log(54*2); // multiplication
console.log(54+2); //adition
console.log(54-2); // subtraction
console.log(54/2); // division
console.log(54%2); // modulus
console.log(54**2); // power

console.log(9>10);
console.log(9<10);
console.log(10=="10"); // true -- loosely equality check--- does consider data type--it perfomrs type coercion
console.log(10==="10"); // false -- strict equality check --- consider data types
/// TASK 1:- diff btw == === in js, ++ --  TRUTH TABLE

// TASK 2: - Control structures in js( conditional statements & loops/iterators )

// String concatenation () --- - template literals ```${}
console.log( (9<4 || 4>2) && 7<8 );// true
console.log( "egg"=="egg" || 9>10 );