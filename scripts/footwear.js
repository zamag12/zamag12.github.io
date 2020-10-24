function footWear() {
	// Input = Get the type of Weather from the user

	let weather = document.getElementById("weather").value;
	
	//Process = Provide options for the user to choose from.
	let shoes;
	if (weather === "hot") {
		shoes ="Wear <strong>sandals</strong> so you can go to the beach."
		
	} 
	else if (weather === "rain") {
		shoes = "Wear your <strong>galoshes</strong> and jump in the puddles."
		
	} 
	else if (weather === "snow") {
		shoes = "Wear <strong>boots</strong>, and create a snowman."
		
	} 
	 else { 
		  shoes = "For any other kind of weather wear <strong>shoes.</strong>"

	}    
	//Output = Show the results to the screen.  
	document.getElementById('output').innerHTML = shoes;
	}
