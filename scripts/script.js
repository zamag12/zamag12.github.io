
    /* Defining Table
 INPUT:  Get two numbers from two different input boxes - x and y
 PROCESSING: Add the two numbers together store in sum
 OUTPUT: Display sum on the document
*/ 

function addNumbers() {
	//INPUT GOES HERE
	 let x = parseFloat(document.getElementById('number1').value);
	 let y = parseFloat(document.getElementById('number2').value);
	//PROCESSING
	//Convert the input strings to numbers using parsefloat;
	 let sum = x + y;
	 //Add the two numbers together and store in my output variable
	//OUTPUT
	 document.getElementById('output').innerHTML = "The sum of " + x + " and " + y + " equals " + sum + "!";
}
