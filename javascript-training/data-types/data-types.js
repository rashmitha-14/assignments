// Syntax to store the data in javascript
// Data types in javascript are divided into two different categories.

// 1. Primitive Data Types(Immutable data types) (Can't change the original value.) (number, string, boolean, undefined,null, symbol)

// 2. Non-Primitive Data Types (Mutable data types) (we can change the original value.) (object, array, function, Set, Map)

// Immutable 
// let a=10;
// a+10;
// console.log(a); 

// Mutable 
let empData1 = {
    empName: "Arav",
    id: 121
}
empData1.age = 26;
console.log(empData1);


/*********************************************/
/***************Primitive Datatypes***********/
/*********************************************/

//  1. number => The data type that can store numbers with decimals or without decimals.
// number should be stored without any quatations.

let num1 = 10;
let num2 = 10.25;
console.log(typeof num1);
console.log(typeof num2);

//  2. string =>The data type that can be store a collection of characters is called string.
// string should be stored always with quotation. (single quotes/double quotes/back ticks).

let firstName = "Ridhi";
let lastName = 'Patel';
console.log(typeof firstName);
console.log(typeof lastName);


let role1 = "Senior 'Software' Engineer";
let role2 = 'Senior "Sofrware" Engineer';

// Back ticks will be used to specify the dynamic string.

// let empInfo=`Employee first name is Rishik, employee last name is Patel and the employee role is Senior Software Engineer.`;

let empInfo = `Employee first name is ${firstName}, employee last name is ${lastName}, and the employee role is ${role1}.`;
console.log(empInfo);

//  3. boolean => boolean represents result of a condition. (true/false)
let result = 10 > 5;
console.log(result);
console.log(typeof result);

//  4. undefined =>undefined represents a variable that has been declared but not asssigned any value yet.
let empAge;
console.log(typeof empAge);

//  5. null => null represent a variable that has been declared  and assigned a null value intentionally.
let salary = 100000;
salary = null;

console.log(salary);
console.log(typeof salary);// Originally salary is also a object thats why we get typeof is an object
console.log(empAge == salary);
console.log(empAge === salary);

//  6. symbol





/*********************************************/
/***************Non-Primitive Datatypes***********/
/*********************************************/

//  1. Object =>object datatype represents a collection of key-value pairs stored together.

// let empName="Rishik";
// let empId=1234;
// let empVisaStatus=true; 

let empData = {
    "name": "Rishik",
    "id": 1234,
    "visaStatus": true,
    "address": {
        "city": "Bangalore",
        "state": "Karnataka",
        "zip": 560004
    }
};

console.log(empData);
console.log(empData.name);
// It is the way to maintain the dynamic changes in object
console.log(empData["name"]);

console.log(empData.address.city);
//dynamic
console.log(empData["address"]["city"]);

// console.log(empData.name.address.city);/// we will get error (we not able to call like that if we want use it in another console)


//  2. Array =>Array is a data type that can store a list of value
// * it allow duplicate values 

// Before array
let fruit1 = "Apple";
let fruit2 = "Banana";
let fruit3 = "Mango";
let fruit4 = "Grapes";

// After Array
let fruits = ["Apple", "Banana", "Mango", "Grapes"]
let prices = [200, 80, 100, 160];
let fruitsAndPrices = ["Apple", 200, "Banana", 80, "Mango", 100, "Grapes", 160];
let fruitsArray = [["Apple", 200], ["Banana", 80], ["Mango", 100], ["Grapes", 160]] //2D array (All the arrays within one array)

let fruitsObject = [
    { "name": "Apple", "price": 200 },    //0
    { "name": "Banana", "price": 80 },    //1
    { "name": "Mango", "price": 100 },    //2
    { "name": "Grapes", "price": 160 }    //3

];          //Object inside the Array

console.log(fruits);
console.log(fruits[2]);
console.log(fruits[5]); //undefined (outOf index value)

console.log(prices);

console.log(fruitsAndPrices[2]);    //  Banana
console.log(fruitsAndPrices[3]);    //80

console.log(fruitsArray[0][0]); //with in the first array first value
console.log(fruitsArray[0][1]); //within the first array second value
console.log(fruitsArray[2][0] + " : " + fruitsArray[2][1]);

console.log(fruitsObject);
console.log(fruitsObject[3].name);


//  3. Function => Function is nothing but block of code or a collection of statements written together to complete  a specific task.
// Function with parameters (The function having some dynamic data or code written inside)
function login(BrowserName) {
    console.log(`Launch the ${BrowserName} Browser`);
    console.log("Enter URL: https://www.icici.com/");
    console.log("Enter user name as 'Rishik' and password as 'Rishik@123'");
    console.log("Click on the login button");
}

// Function withot parameters (The function having some static data or code written inside)
function logoutAndCloseBrowser() {
    console.log("Logout from the application");
    console.log("Close the browser");
}

// Function with return type
function getAccountBalance() {
    console.log("Navigate to the account balance page ");
    let accountBalance = 100000;  //local variable
    return accountBalance;
}

// Bellow 3 data types from ES6(2015)  are also  non-primitive datatypes   (* These are not default JS datatypes these are user made datatypes)

//  Set =>Set is a collection of unique values .   (* Set is not allow duplicate value)
//  Map =>Map is a collection of key-value pair.
//  Date =>Date is a data type that can store the date and time values.


// 4.Set =>Set is a collection of unique values 
let empIds=new Set();
empIds.add(1234);
empIds.add(1235);
empIds.add(1267);
empIds.add(1234); //Dupliacate value will not be added to the set
console.log(empIds);

// 5. Map =>Map is a collection of key-value pairs.
// Map won't allow duplicte keys, but it will allow duplicate values.
let empDetails=new Map();
empDetails.set("name","Rishik");
empDetails.set("id",1234);
empDetails.set("visaStatus",true);
empDetails.set("name","Ridhi"); //duplicate key will not added to the map.It will update the value of the existing key.
empDetails.set("pin",1234);     //map allow duplicate value. duplicate value present in different key.
console.log(empDetails);

//6.  Date =>Date is a data type that can store the date and time values.
let date=new Date();
console.log(date);

// current date 
let currentDate=date.getDate();
console.log(currentDate);

// current month
let currentMonth=date.getMonth()+1; //Months are zero-based(starts with zero)
console.log(currentMonth);

// current year 
let currentYear=date.getFullYear();
console.log(currentYear);

// current hours
let currentHours=date.getHours();
console.log(currentHours);
// current minute
let currentMinutes=date.getMinutes();
console.log(currentMinutes);

// current second
let currentSeconds=date.getSeconds();
console.log(currentSeconds);

// current day of the week
let currentDay=date.getDay();
console.log(currentDay);    //0=>Sunday, 1=>Monday, 2=>Tuesday, 3=>Wednesday, 4=>Thursday, 5=>Friday, 6=>Saturday

