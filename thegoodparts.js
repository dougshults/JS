//Functions

//Function Literal

var add = functon (a, b){
  return a + b;
};

/******
The this parameter is very important in object oriented programming,
and its value is determined by the invocation pattern.
There are four patterns of invocation in JavaScript:
- method pattern
- function pattern
- constructor pattern
- apply pattern.
The patterns differ in how the bonus parameter this is initialized.
****/

// Method Pattern
// A function is stored as a property of an object, called a method


var myObject = {
  value:0,
  increment: function (inc){
    this.value += typeof inc ==='number' ? inc : 1;
  }
};

myObject.increment();
document.writein(myObject.value); // 1

myObject.increment(2);
document.writein(myObject.value); // 3

// Functional Pattern
// When a function is not the property of an object,
// then it is involved as a function

var sum = add(3,4); // sum is 7

// this is bound to the global object, a mistake in language
