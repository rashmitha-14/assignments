// special for loops

// 1. for...of loop =>Iterate over each and every value of the array
//                    //[OR] It is used to iterate over the values of an iterable object like an array,string etc..,
// 2. for...in loop =>it is used to iterate over the properties of an object

// Array of fruits
let fruits: string[] = ["Apple", "Banana", "Mango", "Grapes"];

//  normal-for-loop
for (let i: number = 1; i < fruits.length; i++) {  //fruits.length ==>The 'length' method is going to calculate the total number of values availble inside
    console.log(fruits[i]);

}

// 1. for...of loop 

// syntax
// for(let value of array){
//    console.log(value);
//}

for (let val of fruits) { //Get each value from the fruits array .As many values are available in the fruits array,those many times repeat the execution.
    console.log(val);
}


// 2. for...in loop

// syntax
// for(let key in object){
//     console.log(key);
// }


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

// normal for loop (get each key from object)
// for(let i:number=) //for loop won't work for objects.

for(let key in empData){
    console.log(key);
    console.log(empData[key as keyof empDetails])
}

for(let key in empData.address){
    console.log(key);
    console.log(empData.address[key as keyof empDetails["address"]])
}