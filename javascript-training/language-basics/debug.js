console.log("Executimg Line 1");
console.log("Executimg Line 2");
console.log("Executimg Line 3");
sumOfNumbers(5,10);
console.log("Executimg Line 5");
console.log("Executimg Line 6");
console.log("Executimg Line 7");
console.log("Executimg Line 8");
console.log("Executimg Line 9");
console.log("Executimg Line 10");


// debugging the program step  by step in VS Code

// 1. Add the break point(Click on line number where you want manually execute the program)
// 2. Run the program in debug mode

// continue (F5) => continue the auto-execution till the next breakpoint 
// stop  (shift+F5) => Stop the execution of the program
// Restart  (ctrl+shift+F5)  =>Restart the execution from the begining

// Step Over (F10) => Execute  the current line and move to next line.
// Step Into (F11) => Go inside the step and check the internal code
//  Step Out (shift+F11) =>come out of the internal code  and move to the next line















function sumOfNumbers(a,b) {
    let c=a+b;
    console.log(c);
    
}