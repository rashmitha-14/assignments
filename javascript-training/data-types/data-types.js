// Syntax to store the data in javascript
// Data types in javascript are divided into two different categories.

// 1. Primitive Data Types(Immutable data types) (Can't change the original value.) (number, string, boolean, undefined,null, symbol)

// 2. Non-Primitive Data Types (Mutable data types) (we can change the original value.) (object, array, function, Set, Map)

// Immutable 
// let a=10;
// a+10;
// console.log(a); 

// Mutable 
let empData1={
    empName:"Arav",
    id:121
}
empData1.age=26;
console.log(empData1);


/*********************************************/
/***************Primitive Datatypes***********/
/*********************************************/

// number => The data type that can store numbers with decimals or without decimals.
// number should be stored without any quatations.

let num1=10;
let num2=10.25;
console.log(typeof num1);
console.log(typeof num2);

// string =>The data type that can be store a collection of characters is called string.
// string should be stored always with quotation. (single quotes/double quotes/back ticks).

let firstName="Ridhi";
let lastName='Patel';
console.log(typeof firstName);
console.log(typeof lastName);


let role1="Senior 'Software' Engineer";
let role2='Senior "Sofrware" Engineer';

// Back ticks will be used to specify the dynamic string.

// let empInfo=`Employee first name is Rishik, employee last name is Patel and the employee role is Senior Software Engineer.`;

let empInfo=`Employee first name is ${firstName}, employee last name is ${lastName}, and the employee role is ${role1}.`;
console.log(empInfo);

// boolean => boolean represents result of a condition. (true/false)
let result=10>5;
console.log(result);
console.log(typeof result);

// undefined =>undefined represents a variable that has been declared but not asssigned any value yet.
let empAge;
console.log(typeof empAge);

// null => null represent a variable that has been declared  and assigned a null value intentionally.
let salary=100000;  
salary=null;

console.log(salary);
console.log(typeof salary);// Originally salary is also a object thats why we get typeof is an object
console.log(empAge==salary);
console.log(empAge===salary);

// symbol





/*********************************************/
/***************Non-Primitive Datatypes***********/
/*********************************************/

// Object =>object datatype represents a collection of key-value pairs stored together.

// let empName="Rishik";
// let empId=1234;
// let empVisaStatus=true; 

let empData={
    "name":"Rishik",
    "id":1234,
    "visaStatus":true,
    "address":{
        "city":"Bangalore",
        "state":"Karnataka",
        "zip":560004
    }
};

console.log(empData);
console.log(empData.name);
// It is the way to maintain the dynamic changes in object
console.log(empData["name"]);

console.log(empData.address.city);
//dynamic
console.log(empData["address"]["city"]);

// console.log(empData.name.address.city);/// we will get error (we not able to call like that if we want 
// use it in another console)
