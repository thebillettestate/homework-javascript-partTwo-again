//-------------- Check to see if a variable is less than 10 ---------------\\

var numberTest = 500;


if (numberTest<10){
	console.log("Dude, your variable is less than 10");
} else{
	console.log("Dude, you variable is " + numberTest + " and that shit is less than 10");
}

//-------------- Function that takes a name as an argument ---------------\\
nameChecker("Tobias");

function nameChecker (somePersonsName) {
	return alert("Yo, what's up " + somePersonsName + "?!");
}

//-------------- Function that takes no arguments ---------------\\

jobTitle();

function jobTitle () {
	return console.log("Tobias is the best professional Analyrapist I've ever had the pleasure of working with.");
}

//-------------- Create a loop for the "99 Bottles of Beer" song ---------------\\

var bottles;

for (var i=99; i>0; i--){

//Add an if statement in the loop that will de-pluralize "bottles" when the counter reaches 1
	if (i == 1){
		bottles = " bottle";
	} else{
		bottles = " bottles"
	}

//Add an if statement in the loop that will finalize the song when the count equals zero

	if (i > 1){
		console.log(i + bottles + " of beer on the wall, " + i + bottles + " of beer...Take one down, pass it around. " + (i-1) + bottles + " of beer on the wall.");
	} else{
		console.log(i + bottles + " of beer on the wall, " + i + bottles + " of beer...Take one down, pass it around. " + " No more bottles of beer on the wall.");
	}

}