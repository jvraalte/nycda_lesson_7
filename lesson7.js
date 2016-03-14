/*2. Write 3 different functions that take input and return something via the console or an alert.*/

function alertWeather(anyWeatherType){
	return console.log(anyWeatherType);
}
console.log("Sunny");

function anonymous(){
	var shoutOut = "Whatsup!";
	return alert(shoutOut);
}
anonymous();

function calculate(numberOne, numberTwo){
	return numberOne + 100 + numberTwo;
}
alert(calculate(10, 20));

/*3. Create a script with two variables assigned to two numbers. Add them together and output the result to the console. Now do the same with two strings.*/
function addition(numberOne, numberTwo){
	return numberOne + numberTwo;
}
console.log(addition(10, 15));

function addingStrings(stringX, stringY){
	return stringX + stringY;
}
console.log(addingStrings("It", " Works!"));

/*4. Create a multidimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console.*/
var europe = ["Prague", "Budapest"];
var asia = ["Singapore", "Kuala Lumpur"];
var cities = [["Prague", "Budapest"],["Singapore", "Kuala Lumpur"]];

console.log(cities[0][1]);
console.log(cities[1][0]);

/*5. Write a script that checks if a variable is less than 10. If it is, alert the user that their variable is less than 10. 
If it is not, using the console, let the user know that what the variable was and that it was greater than 10.*/
function check(number){
	if (number<10) {
		alert("the variable " + number + " is less than 10");
	} else{
		console.log(number + " is greater than 10");
	};
}

check(11);

/*6. Try running the script and then changing the variable's value to see how this affects the program's output.*/
function check(number){
	if (number<10) {
		alert("the variable " + number + " is less than 10");
	} else{
		console.log(number + " is greater than 10");
	};
}

check(3);

/*7. Write a similar program to check if a string stored in a variable is the same as another string.*/
/*function checkString(stringX, stringY){
	if (stringX === stringY) {
		return console.log(true);
	} else{
		return console.log(false);
	};

checkString("tricky", "tricky"); */

/*@Nick, I'm not sure why this doesn't work*/

/*8. Declare a function that takes a name as an argument and tells the user what name they've entered. Try running it after it has been declared.*/
function callName(yourName){
	return alert(yourName);
};

callName("Joeri");

/*9. Declare a function that takes no arguments but prints something to the console. Try running it after it has been declared.*/
function nothingThere(){
	var anything = "Random words"
	return console.log(anything);
};

nothingThere();

/*10. Declare a function that depending upon which virtual 'door' was entered tells the user they've received a different 'prize' in an alert. 
After declaring the function, try running it with different options.*/
