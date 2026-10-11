// Conditional statements =>The statement written along with condtion on top of it
// Whenever we want to add some conditions to execute the program, we are going to use conditional statements

// statement => statement meaning line of code 

// condition{
//  line 1
// line 2
// line 3
// }

// There are two different types of condotional statements available in typescript

// 1. if-else statement =>when we don't know the result of the condition before itself
// 2.switch-case Statement =>when we know the result and we want to choose  one option among multiple options available

// if-else Statements

// Syntax

// if(condition1){
//      //The code to be executed if condition1 is true
// }else if(condition2){
//      //The code to be executed if condition2 is true
// }else if(condition3){
//      //The code be executed if condition3 is true
// }else{
//      // Default code to be executed if all the conditions  are false
// }


// Nested if-else conditional statement
// syntax

// if(condition 1){
//      //The code to be executed if condition1 is true
// if(condition){
// code to executed
// }else{
// }
// }else if(condition2){
//      //The code to be executed if condition2 is true
// }else if(condition3){
//      //The code be executed if condition3 is true
// }else{
//      // Default code to be executed if all the conditions  are false
// }


let percentage: number = 94.5;

if (percentage >= 90) {
    console.log("Grade 'A'");

    if (percentage >= 95) {
        console.log("Congrats..!You will get gold medal");
    } else {
        console.log("You will get silver medal");

    }
} else if (percentage >= 80) {
    console.log("Grade 'B'");
} else if (percentage >= 70) {
    console.log("Grade 'C'");
} else if (percentage >= 35) {
    console.log("Grade 'D'");
} else {
    console.log("Fail")
}

console.log("End the Program");


// Switch-case Statements
// break==>breaqk statement is used to terminate the switch case statement once the case is match and executed . if we don't use break point 
// syntax

// switch(expression){
//  case value1:
//         The code to be executed if expression==value1
//         break;
//  case value2:
//         The code to be executed if expression==value2
//         break;
//  case value3:
//         The code to be executed if expression==value3
//         break;
//  default:
//         code to be executed if expression doesn't match any  case
// }


// Example for switch-case statement
let env:string="prod";
switch(env){
    case "dev":
        console.log("Development Environment");
        console.log("Launch application with www.dev.amazon.com");
        break;
    case "qa":
        console.log("qa Environment");
        console.log("Launch application with www.qa.amazon.com");
        break;
    case "prod":
        console.log("Production Environment");
        console.log("Launch application with www.prod.amazon.com");
        break;
    default:
        console.log("Invalid Environment");
}




