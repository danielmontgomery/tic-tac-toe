//rewriting game logic longform.
//declare global variables and win conditions
var win1 = [0,1,2,null,null,null,null,null,null]; //check
var win2 = [null,null,null,3,4,5,null,null,null]; //check
var win3 = [null,null,null,null,null,null,6,7,8]; //check
var win4 = [0,null,null,3,null,null,6,null,null]; //check
var win5 = [null,1,null,null,4,null,null,7,null]; //check
var win6 = [null,null,2,null,null,5,null,null,8]; //check
var win7 = [0,null,null,null,4,null,null,null,8]; //check
var win8 = [null,null,2,null,4,null,6,null,null]; //check
//defines empty variables with 8 places for the two users:
var user1 = [null,null,null,null,null,null,null,null,null];
var user2 = [null,null,null,null,null,null,null,null,null];
var gameBoard = [];
var user1Name = "Player 1";
var user2Name = "Player 2";
var gameIcon1 = "x";
var gameIcon2 = "o";
var user1ID = 1;
var user2ID = 2;


var y = false;

// var currentUser = function(){
// 	if(y === true){
// 		return(user1);
// 	}
// 	else if(y === false){
// 		return(user2);
// 	}
// };
// console.log(currentUser);
//need a function to switch between user1 and user2.
function toggle(){
	y = !y;
}
// ================================================

// Comment:
// I need to change the class from whatever to closed to disable click functionality, but that is more complicated than it sounds.

// ================================================
// Make a nested function to return currentUser?
//now currentUser() returns either user1 or user2 depending on whether 
// y is true or false. 
function returnUser(currentUser){
	return function(){
		if(y === true){
			return(user1);
		}
		else if(y === false){
			return(user2);
		}
	}
};
var currentUser = returnUser();
console.log(currentUser());

function returnUserName(currentUserName){
	return function(){
		if(y === true){
			return(user1Name);
		}
		else if(y === false){
			return(user2Name);
		}
	}
}
var currentUserName = returnUserName();
console.log(currentUserName());

function returnGameIcon(currentGameIcon){
	return function(){
		if(y === true){
			return(gameIcon1);
		}
		else if(y === false){
			return(gameIcon2);
		}
	}
}
var currentGameIcon = returnGameIcon();
console.log(currentGameIcon());
//I THINK THE CODE BELOW IS USELESS:
function returnClassName(currentClassName){
	return function(){
		if(y === true){
			;
		}
		else if(y === false){
			return(gameIcon2);
		}
	}
}
var currentGameIcon = returnGameIcon();
console.log(currentGameIcon());

//function to end the game:
//What needs to happen?
//The user should not be able to click anything else.
//This can also be accomplished by changing the class. 
//When the user clicks anything, the class is changed to disable the square.
//When the game ends, all squares left are changed to that disabled class. 

//I need to do another function: If gameboard[i] != null, don't let a user move there.
//To implement that, I need to put a line in each function above to check if gameboard[i] != null.
//If gameBoard[i] == null, then go ahead with the rest of the function. 
//If gameboard[i] != null, alert the user that they're making an illegal move and don't go ahead with the rest of the function.

//Now that I think about it, one way to automate that big mess at the bottom of the page would be to 
//put everything in a master function that runs when I click. That way I can optimize
//my code so that if the move isn't taken AND there's no winner, it goes ahead with everything else?

//first write my gameBoard != null code:
//I can merge arrays to fill up the gameBoard array!
// function arrayMerger(){
// 	gameBoard = user1.concat(user2);
// 	return(gameBoard);
// }

// function moveChecker(){
// 	if(returnWinChecker() != "winner"){
// 		return("Game On!");
// 	}
// 	else {
// 		return("Winner Declared!");
// 		console.log("Winner Declared!");
// 	}
// }
//or... as a nested function?
function returnMoveChecker(moveChecker){
	return function(){
		if(returnWinChecker() != "winner"){
			return("Game On!");
	}
		else {
			return("Winner Declared!");
			console.log("Winner Declared!");
		}
	}
}
var moveChecker = returnMoveChecker();

function returnUserID(currentUserID){
	return function(){
		if(y === true){
			return(user1ID);
		}
		else if(y === false){
			return(user2ID);
		}
	}
}
var currentUserID = returnUserID();
console.log(currentUserID());

//Good idea: If gameBoard == a winning condition, currentUser wins. 


function returnWinChecker(winChecker){
		return function(){
			if(
				((win1[0] == currentUser()[0]) && (win1[1] == currentUser()[1]) && win1[2] == currentUser()[2]) ||
				((win2[3] == currentUser()[3]) && (win2[4] == currentUser()[4]) && win2[5] == currentUser()[5]) ||
				((win3[6] == currentUser()[6]) && (win3[7] == currentUser()[7]) && win3[8] == currentUser()[8]) ||
				((win4[0] == currentUser()[0]) && (win4[3] == currentUser()[3]) && win4[6] == currentUser()[6]) ||
				((win5[1] == currentUser()[1]) && (win5[4] == currentUser()[4]) && win5[7] == currentUser()[7]) ||
				((win6[2] == currentUser()[2]) && (win6[5] == currentUser()[5]) && win6[8] == currentUser()[8]) ||
				((win7[0] == currentUser()[0]) && (win7[4] == currentUser()[4]) && win7[8] == currentUser()[8]) ||
				((win8[2] == currentUser()[2]) && (win8[4] == currentUser()[4]) && win8[6] == currentUser()[6])
				) {
				console.log(currentUserName() + " Wins this round"); 
				return(currentUserName() + " Wins this round");
				return("winner");

			}
			else{
				console.log("No news, the game goes on");
			}
		}
	}

var winChecker = returnWinChecker();
console.log(winChecker());

//functions that happen when a user clicks a div:
	function f0(){
		toggle(y);
		currentGameIcon();
		currentUserName();
		currentUserID();
		currentUser()[0] = 0; 
		gameBoard[0] = 0;
		console.log(currentUser());
		console.log(currentUserName());
		console.log(gameBoard);
		document.getElementById('s0').innerHTML = currentGameIcon();
		document.getElementById('s0').setAttribute("id", "closed");
		winChecker();
		currentUserID();
		console.log(currentUserID());
	}

	function f1(){
		toggle(y);
		currentGameIcon();
		currentUserName();
		currentUser()[1] = 1; 
		gameBoard[1] = 1;
		console.log(currentUser());
		console.log(currentUserName());
		document.getElementById('s1').innerHTML = currentGameIcon();
		document.getElementById('s1').setAttribute("id", "closed");
		winChecker();
	}
	function f2(){
		toggle(y);
		currentGameIcon();
		currentUserName();
		currentUser()[2] = 2; 
		gameBoard[2] = 2;
		console.log(currentUser());
		console.log(currentUserName());
		document.getElementById('s2').innerHTML = currentGameIcon();
		document.getElementById('s2').setAttribute("id", "closed");
		winChecker();
	}
	function f3(){
		toggle(y);
		currentGameIcon();
		currentUserName();
		currentUser()[3] = 3; 
		gameBoard[3] = 3;
		console.log(currentUser());
		console.log(currentUserName());
		document.getElementById('s3').innerHTML = currentGameIcon();
		document.getElementById('s3').setAttribute("id", "closed");
		winChecker();
	}
	function f4(){
		toggle(y);
		currentGameIcon();
		currentUserName();
		currentUser()[4] = 4; 
		gameBoard[4] = 4;
		console.log(currentUser());
		console.log(currentUserName());
		document.getElementById('s4').innerHTML = currentGameIcon();
		document.getElementById('s4').setAttribute("id", "closed");
		winChecker();
	}
	function f5(){
		toggle(y);
		currentGameIcon();
		currentUserName();
		currentUser()[5] = 5; 
		gameBoard[5] = 5;
		console.log(currentUser());
		console.log(currentUserName());
		document.getElementById('s5').innerHTML = currentGameIcon();
		document.getElementById('s5').setAttribute("id", "closed");
		winChecker();
	}
	function f6(){
		toggle(y);
		currentGameIcon();
		currentUserName();
		currentUser()[6] = 6; 
		gameBoard[6] = 6;
		console.log(currentUser());
		console.log(currentUserName());
		document.getElementById('s6').innerHTML = currentGameIcon();
		document.getElementById('s6').setAttribute("id", "closed");
		winChecker();
	}
	function f7(){
		toggle(y);
		currentGameIcon();
		currentUserName();
		currentUser()[7] = 7; 
		gameBoard[7] = 7;
		console.log(currentUser());
		console.log(currentUserName());
		document.getElementById('s7').innerHTML = currentGameIcon();
		document.getElementById('s7').setAttribute("id", "closed");
		winChecker();
	}
	function f8(){
		toggle(y);
		currentGameIcon();
		currentUserName();
		currentUser()[8] = 8; 
		gameBoard[8] = 8;
		console.log(currentUser());
		console.log(currentUserName());
		document.getElementById('s8').innerHTML = currentGameIcon();
		document.getElementById('s8').setAttribute("id", "closed");
		winChecker();
	}

============================================================================================

Code from game3.js:

//rewriting game logic longform.
//declare global variables and win conditions
var win1 = [0,1,2,null,null,null,null,null,null]; //check
var win2 = [null,null,null,3,4,5,null,null,null]; //check
var win3 = [null,null,null,null,null,null,6,7,8]; //check
var win4 = [0,null,null,3,null,null,6,null,null]; //check
var win5 = [null,1,null,null,4,null,null,7,null]; //check
var win6 = [null,null,2,null,null,5,null,null,8]; //check
var win7 = [0,null,null,null,4,null,null,null,8]; //check
var win8 = [null,null,2,null,4,null,6,null,null]; //check

// //----------- Redefine Win Conditions -------------------
// var win1 = [null, null, null, null, null, null, null, null, null];
// var win1 = [null, null, null, null, null, null, null, null, null];
// var win1 = [null, null, null, null, null, null, null, null, null];
// var win1 = [null, null, null, null, null, null, null, null, null];
// var win1 = [null, null, null, null, null, null, null, null, null];
// var win1 = [null, null, null, null, null, null, null, null, null];
// var win1 = [null, null, null, null, null, null, null, null, null];
// var win1 = [null, null, null, null, null, null, null, null, null];

//-------------------------------------------------------
//defines empty variables with 8 places for the two users:
var user1 = [null,null,null,null,null,null,null,null,null];
var user2 = [null,null,null,null,null,null,null,null,null];
var gameBoard = [];
var user1Name = "Player 1";
var user2Name = "Player 2";
var gameIcon1 = "x";
var gameIcon2 = "o";
var user1ID = 1;
var user2ID = 2;

var y = false;

//need a function to switch between user turns:
function toggle(){
	y = !y;
}
// Toggles current user between user1 and user2: 
function returnUser(currentUser){
	return function(){
		if(y === true){
			return(user1);
		}
		else if(y === false){
			return(user2);
		}
	}
};
var currentUser = returnUser();
console.log(currentUser());

// Toggles User Name:
function returnUserName(currentUserName){
	return function(){
		if(y === true){
			return(user1Name);
		}
		else if(y === false){
			return(user2Name);
		}
	}
}
var currentUserName = returnUserName();
console.log(currentUserName());

// Toggle User IDs.
function returnUserID(currentUserID){
	return function(){
		if(y === true){
			return(user1ID);
		}
		else if(y === false){
			return(user2ID);
		}
	}
}
var currentUserID = returnUserID();
console.log(currentUserID());

// Toggles Game Icon Between X and O:
function returnGameIcon(currentGameIcon){
	return function(){
		if(y === true){
			return(gameIcon1);
		}
		else if(y === false){
			return(gameIcon2);
		}
	}
}
var currentGameIcon = returnGameIcon();
console.log(currentGameIcon());
//Win Checker
function returnWinChecker(winChecker){
		return function(){
			if(
				((win1[0] == currentUser()[0]) && (win1[1] == currentUser()[1]) && win1[2] == currentUser()[2]) ||
				((win2[3] == currentUser()[3]) && (win2[4] == currentUser()[4]) && win2[5] == currentUser()[5]) ||
				((win3[6] == currentUser()[6]) && (win3[7] == currentUser()[7]) && win3[8] == currentUser()[8]) ||
				((win4[0] == currentUser()[0]) && (win4[3] == currentUser()[3]) && win4[6] == currentUser()[6]) ||
				((win5[1] == currentUser()[1]) && (win5[4] == currentUser()[4]) && win5[7] == currentUser()[7]) ||
				((win6[2] == currentUser()[2]) && (win6[5] == currentUser()[5]) && win6[8] == currentUser()[8]) ||
				((win7[0] == currentUser()[0]) && (win7[4] == currentUser()[4]) && win7[8] == currentUser()[8]) ||
				((win8[2] == currentUser()[2]) && (win8[4] == currentUser()[4]) && win8[6] == currentUser()[6])
				) {
				console.log(currentUserName() + " Wins this round"); 
				return(currentUserName() + " Wins this round");
				return("winner");

			}
			else{
				console.log("No news, the game goes on");
			}
		}
	}

var winChecker = returnWinChecker();
console.log(winChecker());


Here is what I need to create at this time: An overall function
that gets a user move, adds it to the game board state, and 
if that game board state matches a win condition it declares the last 
	user as the winner AND ends the game. Where I was going wrong before I was
trying to write an overall loop and fit my function inside it. Now, I need
to write the function and then figure out how to iterate. 

The first step is to figure out how to make the gameBoard array. 
I need to put each user move into the gameBoard array in the same way I
added user moves to the user arrays. Why does that not work?

///////////////////
I have a few main problems I need to solve right now: 
1. I need to make it so that when you click on a square, it is deactivated and unable to be clicked on again. I thought switching the div would work, it did not.
		Right now if I click on a div (like [0]) the id changes making it unchangable on the screen, yet when it is clicked on the page the value of the user 
		changes and is placed in that spot. So if I click the top right it will change the class, yet it can still be clicked on and the user can win. 
		EDIT: SOLVED! CHANGING THE ID WORKED!

2. I need to make it so that when you have a winner, the game ends and ALL squares are unclickable. 

3. Get a Tie condition, attach that to the winner condition.

////////////////

function gameOnClick(){
	if(gameBoard[i] != 
}



