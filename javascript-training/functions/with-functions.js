// Test case 1: Verify the home page .

console.log("*******************TEST CASE 1 : VERIFY HOME PAGE******************");
login("Chrome");
console.log("Verify the the home page is displayed or not");
logoutAndCloseBrowser();

// Test case 2 : Verify the account balance

console.log("*******************TEST CASE 2 : VERIFY ACCOUNT BALANCE******************");
login("Edge");
console.log("Verify the the home page is displayed");
console.log("Verify the account balance is displayed as " + getAccountBalance());
logoutAndCloseBrowser();

// Test case 3 : Verify the account statement

console.log("*******************TEST CASE 3 : VERIFY ACCOUNT STATEMENT******************");
login("Firefox");
console.log("Verify the the home page is displayed");
console.log("Navigate to to the account statement page");
console.log("Verify account statement is displayed with the following details :")
logoutAndCloseBrowser();




// STEP TO CREATE THE FUNCTION
// 1. Identify the duplicate code and separate the same from the program 
// 2. Copt the duplicate code and add it inside the block
// 3. Add unique name along  with function keyword to each and every block


// Function with parameters (The function having some dynamic data or code written inside)
function login(BrowserName){
console.log(`Launch the ${BrowserName} Browser`);
console.log("Enter URL: https://www.icici.com/");
console.log("Enter user name as 'Rishik' and password as 'Rishik@123'");
console.log("Click on the login button");
}

// Function withot parameters (The function having some static data or code written inside)
function logoutAndCloseBrowser(){
console.log("Logout from the application");
console.log("Close the broser");
}

// Function with return type
function getAccountBalance(){
 console.log("Navigate to the account balance page ");
let accountBalance=100000;  //local variable
return accountBalance;
}
