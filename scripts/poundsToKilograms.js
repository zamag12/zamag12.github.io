
    /* Defining Table
 INPUT:  Get two numbers from two different input boxes - x and y
 PROCESSING: Add the two numbers together store in sum
 OUTPUT: Display sum on the document
*/ 

function poundsToKilograms() {
	// Input: Get pound number from the user.
	let pounds = parseFloat(document.getElementById("pounds")).value;
	
	// Processing: Convert pounds to kilograms.
	let kilograms = 25 / 2.2;
	
	// Output:Show calculations on the screen.
   document.getElementById("output").innerHTML = kilograms.toFixed(1) + " Kilograms";
}
}
