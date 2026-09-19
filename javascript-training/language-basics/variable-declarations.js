// how to store the data in javascript

// declaration variable=data;

// Declaration is all about specifying the nature of data in javascript.

// In javascript, we can declare the varible by using 3 different keywords.
// 1. var =>'var' can store variable data,that can be changed later(It should not be used in modern JS)
// 2. let =>'let' also store variable data that can be changed later.
// 3. const =>'const' can store constant data or fixed data that cannot be changed later.


// Generally,these 3 different variable declaration are going to differ mainly based on 4 different parameters.

// 1. Initialization
// 2. Reassignment
// 3. Re-declaration
// 4. Scope

// 1. Initialization => Adding the value at the time of declaration.
var a;  //It is not mandatory to initialize the variable when we are using 'var'
let b; //It is not mandatory to initialize the variable when we are using 'let'
const c=1234; //It is mandatory to initialize the variable when we are going to use a 'const'
a=10;
b=20;

// 2. Reassignment =>modifying the original value
a=100; //var allows re-assignment
b=200; //let allow re-assignment
// c=300; //const wont allow re-assignment

console.log(a);
console.log(b);
console.log(c);


// 3. Re-declaration =>Declare the same variable again to store different data
var a="Bharath"; //var allows re-declaration
// let b="ABCD";  //let won't allow re-declaration
// const C="XYZ"; //const won't allow re-declaration
console.log(a);

// 4. Scope =>Where we can access the data? block means {}

{
    let value1=1000; //let is block scoped
    const value2=2000; // const also block scoped
    var value3=3000;  //var is not block scoped

    console.log(value1);
    console.log(value2);
    console.log(value3);

}
    // console.log(value1);
    // console.log(value2);
    console.log(value3);

