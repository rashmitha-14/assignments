export{};  //Now TypeScript treats each file as a separate module, so the same variable name is allowed.
// Syntax to declare the data 
// Declaration variable : datatypes = data;

// In Typescript , there are two different categories of data types.

// 1.   Primitive datatypes
// 2.   Non-Primitive datatypes

/*********************************************/
/***************Primitive Datatypes***********/
/*********************************************/

//  1. number => The data type that can store numbers with decimals or without decimals.
// number should be stored without any quatations.

let n1:number = 10;
let n2:number = 10.25;
console.log(n1);
console.log(n2);

//  2. string =>The data type that can be store a collection of characters is called string.
// string should be stored always with quotation. (single quotes/double quotes/back ticks).

let firstName:String = "Ridhi";
let lastName:string = 'Patel';
let role:string='Senior "Software" Engineer';
console.log(typeof firstName);

// Back ticks will be used to specify the dynamic string.
let empInfo:string = `Employee first name is ${firstName}, employee last name is ${lastName}, and the employee role is ${role}.`;
console.log(empInfo);

//  3. boolean => boolean represents result of a condition. (true/false)
let result:boolean = 10 > 5;
console.log(result);

//  4. undefined =>undefined represents a variable that has been declared but not asssigned any value yet.
let empAge:undefined;
console.log(empAge);

//  5. null => null represent a variable that has been declared  and assigned a null value intentionally.
let empSalary:null=null;
console.log(empSalary);

// union =>union represent more than one datatype with in the variable
let empAddress : string | number;
empAddress="Bangalore";
empAddress=560004;

// any => Any data types is allowed with in the variable (Basically we are removing the type safety from the typescript)
// ====>Some times whenever we want to use external data type we dont have any idea about what type of data it will return that time we use "any"

let empInformation :any ;
empInformation ="Rishik";
empInformation =1234;
empInformation=true;
console.log(empInformation);

/*********************************************/
/***************Non-Primitive Datatypes***********/
/*********************************************/

//  1. Object =>object datatype represents a collection of key-value pairs stored together.
// let empName="Rishik";
// let empId=1234;
// let visaStatus=true;



interface empDetails{
    "empName" : string,
    "empId" : number,
    "visaStatus" : true,
    "date":string,
    "address":{
        "Street": string,
        "city": string,
        "state": string
    }

}

let empData={
    "empName" : "Rishik",
    "empId" : 1234,
    "visaStatus" : true,
    "date":"07-10-2026",
    "address":{
        "Street": "123 main st",
        "city": "Bangalore",
        "state": "Karnataka"
    }

};


// Array
let fruits :string[]= ["Apple", "Banana", "Mango", "Grapes"];
let prices:number[] = [200, 80, 100, 160];
let fruitsAndPrices: (string|number)[] = ["Apple", 200, "Banana", 80, "Mango", 100, "Grapes", 160];

console.log(fruits[0]);
console.log(prices[1]);
console.log(fruitsAndPrices[3]);

// special array in typescript:-
// 1. tuple:tuple is an ordered array

// tuple vs normal array

// problem statement: store employee name,employee id,visa status within the array.
// Array
let empInformationArray : (string|number|boolean) []=["Rishik",1234,true]; 

// tuple
let empTuple :[string,number,boolean]=["Rishik",1234,true];

//  Function => Function is nothing but block of code or a collection of statements written together to complete  a specific task.
// Function with parameters (The function having some dynamic data or code written inside)
function login(browserName:string,username:string,password:string):void {
    console.log(`Launch the ${browserName} Browser`);
    console.log("Enter URL: https://www.icici.com/");
    console.log(`Enter user name as ${username} and password as ${password}`);
    console.log("Click on the login button");
}

// Function withot parameters (The function having some static data or code written inside)
function logoutAndCloseBrowser():void {
    console.log("Logout from the application");
    console.log("Close the browser");
}

// Function with return type
function getAccountBalance() :number{
    console.log("Navigate to the account balance page ");
    let accountBalance:number = 100000;  //local variable
    return accountBalance;  //it will copy the local variable value store it in function name
}


//  Set =>Set is a collection of unique values .   (* Set is not allow duplicate value)
//  Map =>Map is a collection of key-value pair.
//  Date =>Date is a data type that can store the date and time values.


// 4.Set =>Set is a collection of unique values 
let empIds:Set<number>=new Set();
empIds.add(1234);
empIds.add(1235);
empIds.add(1267);
empIds.add(1234); //Dupliacate value will not be added to the set
console.log(empIds);

// 5. Map =>Map is a collection of key-value pairs.
// Map won't allow duplicte keys, but it will allow duplicate values.
let empDetails:Map<string,string|number|boolean>=new Map();  //here first string for key ,values is keep on changing so for that we use union 
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




