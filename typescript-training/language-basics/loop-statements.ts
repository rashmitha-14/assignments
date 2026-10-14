export{}
// Loop statements in Typescript

// loop statements are nothing but a set of condition that we are going to add along with the statements to execute the same code multiple times.

let customerName:string="Arav";
// Before loops

// console.log(customerName);
// console.log(customerName);
// console.log(customerName);
// console.log(customerName);
// console.log(customerName);
// console.log(customerName);
// console.log(customerName);
// console.log(customerName);
// console.log(customerName);
// console.log(customerName);


// loops statements are mainly divided into two different categories.

// 1.for loop =>when we know the total number of iterations to be executed before itself.
// 2.while loop=>when we won't know the total number of iterations to be executed before.

//1. for loop

// syntax of for loop
// for(initialization;condition-to-end; increment/decrement) {//initialization=> condition to brgin, condition-to-end =>where to stop the loop, increment/decrement =>interval between each iteration

        // code to be executed multiple times

// }

// for loop print the name for 10 times
for(let i:number=1;i<=100;i++){
    console.log(i+" "+customerName);
    
}

// another way
// for(let i:number=1;i<=100;){
//     console.log(i+" "+customerName);
//     i++;
// }


//2. while loop

// syntax for while loop
// while(condition-to-begin){
//     code to be executed multiple Times
//     increment/decrememnt
// }

let j:number=1;
let pageLoaded:boolean=false;
while(j>0){

    // break the loop either if a page is loaded successfully or already refreshed ten times
    if(pageLoaded || j>10){
        break;
    }
    console.log(j + " Refresh the page");
    j++;
}



