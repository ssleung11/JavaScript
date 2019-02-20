//Homework: Refactor previous homework using functions 

// questions below 

// 1. Using Math.random() function, create random numbers between 1 and 100 and 
//create a simple condition that outputs whether its odd or even

let num = Math.floor(Math.random()*100)+1;
function random(num){
	if(num % 2 == 1){
	    console.log("It's Odd")
	}
		else{
	    console.log("It's Even")
		}
	}; 
random(num); 

// 5. Convert this into a for(...) loop (more compact). And then try 
//create an equilateral triangle (ie the apex is in the middle rather than the left side).

// refactoring
function triangle(){
	for (number = 1; number < 5; number++) {
		switch (number) {
		case (1):
		console.log("    #");
		break;
		case (2):
		console.log("   ###");
		break;
		case (3):
		console.log("  #####");
		break;
		case (4):
		console.log(" #######");
		break;
		case (5):
		console.log("#########");
		break;
		default:
		break;
		}
	}
}
// calling function 
triangle (); 
