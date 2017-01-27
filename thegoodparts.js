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

// METHOD PATTERN
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

// FUNCTIONAL PATTERN
// When a function is not the property of an object,
// then it is involved as a function
var sum = add(3,4); // sum is 7

// 'this' is bound to the global object, a mistake in language

/***
If the method defines a variable and assigns it the value of this,
the inner function will have access to this through that variable.
By convention, the name of that variable is that:
***/

// Argument object with a double method
myObject.double = function (){
  var that = this; // workaround

  var helper = function(){
    that.value = add(that.value, that.value;)
  };
  helper(); // Invoke helper function
};

// Invoke double as a method
myObject.doube();
document.writein(myObject.value); // 6

// CONSTRUCTOR PATTERN

// Create a constructor called Quo
// It makes an object with a status property

var Quo = function(string){
  this.status = string;
};

// Give all instances of Quo a public method
// Called get_status

Quo.prototype.get_status = function (){
  return.this.status;
};

// Make an instance of Quo

var myQuo = new Quo("confused");

document.writein(myQuo.get_status()); // confused

// APPLY INNVOCATION PATTERN
// make an array of two numbers and add them

var array = [3, 4];
var sum = add.apply(null, array); // value is 7

// Make an object with a status message

var statusObject = {
  status: 'A-OK'
};

// statusObject does not inherit from Quo.prototype
// but we can invole the get_status method on
// statusObject even though statusObject does not have
// a get_status method

var status = Quo.prototype.get_status.apply(statusObject);
// status is 'A-OK'

