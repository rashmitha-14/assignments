// In Javascript, variable are divided into two different categories.

// 1. Local Variable =>The variable declared inside the block is called a local variable.
// 2. Global Variable => The variable declared outside of the block are callled global variable.


let empName="Bharath Reddy";
{
    let empAge=35;  //empAge is a local variable
    console.log(empAge); //35
    console.log(empName); //Bharath Reddy
}

// console.log(empAge); //error
console.log(empName);  //Bharath Reddy