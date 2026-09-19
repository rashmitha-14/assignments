// Syntax to store the data in javascript
// declaration variable=data;

// Operator : Operators are nothing but a set of special characters used in javascript to perform different types of operations.

// Based on the nature of the operation that we are going to complete,we can divide these operators into five different categories.
// 1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. Ternary Operator


// 1. Arithmetic Operators =>Arithmetic Operators are set of special characters used to perform mathematical operations.

// + => Addition
// - => Subtraction
// * => Multiplication
// / => Division
// % => Modulus
// ++ => Increment (+1 Increase the original value by one.)
// -- => Decfrement (-1 Decrease the original value by one.)

let a=10;
let b=10;

// ++ always going to increase the value by one,-- always going to decrease the value by one, but the placement of ++ & -- will decide when to update.

// If ++ written after variable, first it execute the line with the old value.later Its going to increase the value . (Post-Increment)
// If ++ written before variable, first it increase the value by one then execute the line.  (Pre-Increment)
console.log(a++); //10
console.log(b--); //10
console.log(a);   //11
console.log(b);   //9


// 2. Assignment Operators =>Assignment Operators are set of special characters used to assign values to variable.

//  =
//  +=
//  -=
//  *=
//  /=
//  %= 


let i=10;
console.log(i);

i+=10; // i=i+10; // Increase the value by 10
console.log(i); //20

i-=5; // i=i-5; // Decrease the value by 5
console.log(i); //15

i*=5; // i=i*5; // Multiply the original value by 5
console.log(i); //75

i/=5; // i=i/5 ; Divided by 5
console.log(i); //15

i%=5; 
console.log(i); //0


// 3. Comparison Operators =>Set of special character used to compare two different values
// ==, ===, >, <, >=, <=,!=,!==
// == REpresents loose eqality,meaning compare only data
// === Represents strict eqality, meaning compare data along with data type.

let x=10;
let y=10;
let z="10"; // String (The number inside the quotation will represent text, not a number.)

console.log(x==y);
console.log(x==z);
console.log(x===z);

console.log(x+y);
console.log(x+z); //1010 //it will join the numbers

console.log(x!=z);
console.log(x!==z);


// 4. Logical Operators =>Logical Operators are all about a set of special characters used to combine two or more condition
//  && => Logical AND =>Return true if all the conditions are true.
//  || => Logical OR =>Return true if atleast  one condition is true.
//  !  => Logical NOT

let p=10;
let q=20;
let r=30;
console.log(p<q && q>r && p<r); //true and false and true = false
console.log(p<q || q>r); //true or false = true
console.log(!(p>q || q>r)); // !(true or false)=!true = false


// 5. Ternary Operator =>Ternary Operator is a special character used to perform conditional operations.
// Syntax : let result = (condition) ? value-if-true : value-if-false;

let age=17;

let result=(age>=18) ?"Eligible-to-vote" : "Not-Eligible-to-vote" ;
console.log(result);
let res=(age>18 && age<=22)?"The student are in graduation degree":"The are completed their graduation";
console.log(res);
