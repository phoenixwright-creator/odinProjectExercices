/*
Ex 1:

Write the code, one line for each action:

    Create an empty object user.
    Add the property name with the value John.
    Add the property surname with the value Smith.
    Change the value of the name to Pete.
    Remove the property name from the object.

let user = {};
console.log(user);
user.name = "John";
console.log(user);
user.surname = "Smith";
console.log(user);
user.name = "Pete";
console.log(user);
delete user.name;
console.log(user);

Ex 2:

Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function isEmpty(obj) {
    let counter = 0;
    for(let key in obj){
        counter++;
    }
    console.log(counter);
    if(counter===0){
        return true;
    }
    else{
        return false;
    }
}

let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false

Ex 3:

Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

function sumSalaries(obj){
    let counter = 0;
    for(let key in obj){
        counter = counter + obj[key];
    }
    return counter;
}

console.log(sumSalaries(salaries));

Ex 4:

Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

P.S. Use typeof to check for a number here.
*/

function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof obj[key]==="number"){
            obj[key]=obj[key]*2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
  
multiplyNumeric(menu);

console.log(menu);
