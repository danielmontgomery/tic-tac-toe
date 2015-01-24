var win1 = [0,1,2,null,null,null,null,null,null];
var win2 = [null,null,null,3,4,5,null,null,null];
var win3 = [null,null,null,null,null,null,6,7,8];
var win4 = [0,null,null,3,null,null,6,null,null];
var win5 = [null,1,null,null,4,null,null,7,null];
var win6 = [null,null,2,null,null,5,null,null,8];
var win7 = [0,null,null,null,4,null,null,null,8];
var win8 = [null,null,2,null,4,null,6,null,null];
//defines empty variables with 8 places for the two users:
var user1 = [null,null,null,null,null,null,null,null,null];
var user2 = [null,null,null,null,null,null,null,null,null];
var user1Name;
var user2Name;
//The lastUser variable 
var lastUser = user1.slice();
var lastUserName;
console.log(lastUser);
var currentGameIcon;


// this function determines a winner. 
// function winner4() {
// 	var currentUser = lastUser.slice();
// 	if((win4[0] == currentUser[0]) && (win4[4] == currentUser[4]) && win4[6] == currentUser[6]){
// 		console.log("User 1 Wins");
// 	}
// 	else {
// 		console.log("try again");
// 	}
// }

// instead of writing a separate function for each winning condition and running through those,
// I would like to run through each of the win arrays. The issue here is that 
// I will need to specify positions to check in these arrays. For this, I may just need
// to use these functions like winnner4(). Is there a way to do this with functions nested inside other functions?

// I can make a winChecker function that runs through all of these. 
// The winChecker function should go like this and run after every move:

// I could make a loop that runs through each function but igores null values?
// while(true){
	//this grabs the user choice depending on which div they click. 
	var userChoice;
	document.getElementById("s0").addEventListener("click", function() {
		userChoice = "topLeft";
		this.className = ("closed");
		this.innerHTML = (currentGameIcon);
	});
	document.getElementById("s1").addEventListener("click", function() {
		userChoice = "topMiddle";
		this.className = ("closed");
	});
	document.getElementById("s2").addEventListener("click", function() {
		userChoice = "topRight";
		this.className = ("closed");
	});
	document.getElementById("s3").addEventListener("click", function() {
		userChoice = "midLeft";
		this.className = ("closed");
	});
	document.getElementById("s4").addEventListener("click", function() {
		userChoice = "midMiddle";
		this.className = ("closed");
	});
	document.getElementById("s5").addEventListener("click", function() {
		userChoice = "midRight";
		this.className = ("closed");
	});
	document.getElementById("s6").addEventListener("click", function() {
		userChoice = "bottomLeft";
		this.className = ("closed");
	});
	document.getElementById("s7").addEventListener("click", function() {
		userChoice = "bottomMiddle";
		this.className = ("closed");
	});
	document.getElementById("s8").addEventListener("click", function() {
		userChoice = "bottomRight";
		this.className = ("closed");
	});
var gameIcon1 = "x";
var gameIcon2 = "o";
=======================================================

messing around with arrays:
for(var i=0; i < 9)
var x = document.getElementsByClassName("gamespot");


=======================================================

	document.getElementByClassName("gamespot").addEventListener("click", function(){
		var currentUser = lastUser.slice();
		var currentUserName = lastUserName;

		//This toggles the value of x.
		var x = true;
		function toggle(){
			x =! x;
			return(x);
		}
		toggle();
		
		if(x === true){
				currentUser = user1;
			currentUserName = user1Name;
			currentGameIcon = gameIcon1;
		}
		else if(x === false){
				currentUser = user2;
			currentUserName = user2Name;
			currentGameIcon = gameIcon2;
		}
		if(
			((win1[0] == currentUser[0]) && (win1[1] == currentUser[1]) && win1[2] == currentUser[2]) ||
			((win2[3] == currentUser[3]) && (win2[4] == currentUser[4]) && win2[5] == currentUser[5]) ||
			((win3[6] == currentUser[6]) && (win3[7] == currentUser[7]) && win3[8] == currentUser[8]) ||
			((win4[0] == currentUser[0]) && (win4[3] == currentUser[3]) && win4[6] == currentUser[6]) ||
			((win5[1] == currentUser[1]) && (win5[4] == currentUser[4]) && win5[7] == currentUser[7]) ||
			((win6[2] == currentUser[2]) && (win6[5] == currentUser[5]) && win6[8] == currentUser[8]) ||
			((win7[0] == currentUser[0]) && (win7[4] == currentUser[4]) && win7[8] == currentUser[8]) ||
			((win8[2] == currentUser[2]) && (win8[4] == currentUser[4]) && win8[6] == currentUser[6])
			) {
			console.log(currentUserName + " Wins this round"); 
			return(false);
		}
		else {
			return(true);
		}
	});

	// }

// after each move, afterClick() needs to run, it also needs to:
// (1) Change the icon (assign boolean value)
// (2) Change the state of the clicked div => clickedDiv (can not be clicked again.)
// (3) toggle value of currentUserName
// ============================================================================
// I need to getElementById of whatever square was clicked.
// I can make a variable to use multiple times. The variable value will be 
// set to 1-9, depending on user choice. It will be redefined after each click. 
// How to set variable to 1-9 depending on user choice:
// 	User clicks square 1. 
// 	afterClick runs. 
// 	userChoice should be set to whatever id the player clicked. 


// 	=======================================================================

// Adding an X or an O to the game board. 
// Need to define user choice. 

=======================================
Here is what I need to happen: 
Whenever I click on a square, it is selected through the x[i] event listener. 

=======================================





