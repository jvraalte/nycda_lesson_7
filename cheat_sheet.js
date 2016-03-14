/*1. Create a "cheat sheet" JavaScript file that contains working examples with comments of:*/

/*- Variables*/
var exampleOne = "this is a string";
var exampleTwo = ["this", "is", "a", "array", "with", "strings"];
var numberOfHouses = 10;
var isThisFun = true;

/*- Debugging (alerts, comments, the console)*/
var translation = "";
var myString = "A string";      
console.log(myString.split(""));

var city = "Amsterdam"
alert(city)

/*- Different data types*/
/*string*/  "any words whatsoever"
/*array*/ ["string", 1]
/*Object*/ {country: "Japan", city: "Tokyo"} 
/*number*/  1, 2, 3
/*Boolean*/ true, false

/*- Arrays*/
Arrays are used to hold a collec0on of data, of any data type. This one is full of strings:
["Snoopy", "Charlie Brown", "Patty", "Violet"];
• They can hold mul0ple data types:
[11, 15, 25, 48, 79, "elephant"];
• Arrays can also be stored in variables:
var class_names = ["Julie", "Sophie", "Rob", "John"];

An array can store other arrays:
// declare the first array
var toyotas = ["Camry", "Prius"];
// declare the second array
var porsches = ["Camero", "Boxer"];
// declare a third array that contains the first
// and second array
var cars = [toyotas, porsches];
This is called a multidimensional array

To access the items nested inside of a mul1-dimensional array, youll use this syntax:
// declare your mult-dimensional array
var cars = [ ["Porsche", "Camero"], ["Camry", "Prius"] ];
// access the first array inside
// then the first item inside that array
console.log(cars[0][0]);
> "Porsche"
// access the first array inside
// then the first item inside that array
console.log(cars[1][0]);
> "Camry"

/*- Testing*/
Any test returns a boolean true or false
• To test if two strings are equal:
"stringone" === "string two";
>false
• Using three equals signs instead of two also checks the object type
• If you dont check type, these are both true:
(10-5) == 5;
(10-5) == "5";
• Can cause bugs down the road!

/*- Logic*/
• The control flow of your program
• Think of logic as a river that branches off in a few different ways
• It allows you to make the computer do the thinking for you!

/*- Functions*/
• A function is a way to encapsulate code for later use
• It can take arguments, which are used as variables inside the
func<on
• It usually returns a value, which can be used later on or displayed
immediately

// Declare a function called someName that takes
// two arguments: numberOne and otherNumber
function someName(numberOne, otherNumber){
// return the sum of numberOne, 10, and otherNumber
return numberOne + 10 + otherNumber;
}
// call your new function, giving it 2 argument values
// numberOne = 4, otherNumber = 14
// log the result to the console
console.log(someName(4, 14));
// Calling a function is also known as "invoking" it
>28

// declare a function with the name alertName
// that takes one argument, somePersonsName
function alertName(somePersonsName){
// the function returns an alert with their name
return alert(somePersonsName);
}
// invoke the function
alertName("Zach");