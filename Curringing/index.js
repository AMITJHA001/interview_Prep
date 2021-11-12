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
multipleValue = multipleValue(10);
multipleValue = multipleValue(30);
console.log(multipleValue);
//Output:50



*/










