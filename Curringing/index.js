//Curringing

const { clear } = require("console");

/* Examplanation:  Currying is a process in functional programming
 in which we can transform a function with multiple arguments into a sequence of nesting functions. 
  It returns a new function that expects the next argument inline.
  
 Defination: Currying is the process of turning a function with multiple arity into a function with less arity — 
    -Kristina Brainwave
    Note: The term arity, refers to the number of arguments a function takes.

    For Eg: (non currringing function)

    //function takees in two arguments
    function fn(a, b) {
    //...
    }

    //function take in three arguments
    function _fn(a, b, c) {
    //...
    }

    And Curringing function:

    funtion fn(a){
        return (b)=>{
            //...
        }
    }

    function  _fn(a){
        return (b)=>{
            return (c)=>{
                //...
            }
        }
    }


    //Noraml function 

    function multiply(a,b,c){
        return a+b+c;
    }
    console.log(multiply(10,10,30));
    //Output:50

    //Curringing Function

  function multiply(a){
    return(b)=>{
        return(c)=>{
            return a+b+c;
        }
    }
}



//console.log(multiply(10)(10)(30));
//Output:50

or

let multipleValue = multiply(10);
multipleValue1 = multipleValue(10);
multipleValue2 = multipleValue1(30);
console.log(multipleValue2);
//Output:50


This is how multipleValue2 could perform the multiplication operation with variables defined in the already exit-ed functions. 
Though the functions have long since returned and garbage collected from memory, yet its variables are somehow still kept "alive".


function discount(n){
    return (p) =>{
        return p * n;
    }
}

let tenPercentDiscount = discount(0.1);
console.log(tenPercentDiscount(100));


Example & useCase

For example, we have a function to calculate the volume of a cylinder:

function volume(l, w, h) {
    return l * w * h;
}

It happens that all the cylinders in your warehouse🏠 are of height 100m. 
You will see that you will repeatedly call this function with h as 100:


volume(200,30,100) // 2003000l
volume(32,45,100); //144000l
volume(2322,232,100) // 53870400l

function volume(h) {
    return (w) => {
        return (l) => {
            return l * w * h
        }
    }
}


function volume(h) {
    return (w,l) => {
            return l * w * h
    }
}

let calculateVolume = volume(100);
let cylinderOne = calculateVolume(20,30);
let cylinderTwo = calculateVolume(40,30);

console.log(cylinderOne , cylinderTwo);
//Output: 60000 120000


Make Any Function as Curry function.

function curry(fn, ...args) {
    return (..._arg) => {
        return fn(...args, ..._arg);
    }
}


The idea behind currying is to take a function and derive a function that returns specialized function(s).

*/


function curry(fn , ...arg ){
    return (..._arg)=>{
        return fn(...args, ..._arg);
    }
}

curry();















