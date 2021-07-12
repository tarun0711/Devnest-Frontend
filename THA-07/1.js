// Write a JavaScript program to list the properties of a JavaScript object. 
// Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
// Sample Output: name,sclass,rollno

//Method1: console.log(GetOwnPropertyNames.keys(student));
// for(var item in student) {
//     console.log(item, student[item]);
// }


var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

console.log(Object.keys(student));