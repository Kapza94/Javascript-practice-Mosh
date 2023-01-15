function greet(){
    //body of the function
    //add the statements to define the logic
    console.log('Hello, World!');
}

greet();

//another option

function greet(name){
    console.log('Hello', + name);
}

greet('John');//argument
greet('Mary');


//This funciton is performing a task.
function greet(name,lastName){
    console.log('Hello ' + name + ' ' + lastName);
}

greet('John');//argument
greet('Mary');


//Calculates a value

function square(number){
    return number * number;
}

let number = square(2);//= 4
square(number);//=16

//but you can also log it like this in the console.  
console.log(square(2));
