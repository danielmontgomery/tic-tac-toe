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
var user1Name = "Player 1";
var user2Name = "Player 2";
var gameIcon1 = "o";
var gameIcon2 = "x";


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

// function makeClicker(i){
// 	return function(){
// 		i = 
// 	}
// }
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
				return(false);
			}
			else{
				console.log("No news, the game goes on");
			}
		}
	}
var winChecker = returnWinChecker();
console.log(winChecker());

// document.getElementById('s0').addEventListener('click', f0());
// document.getElementById('s1').addEventListener('click', f1());
// document.getElementById('s2').addEventListener('click', f2());
// document.getElementById('s3').addEventListener('click', f3());
// document.getElementById('s4').addEventListener('click', f4());
// document.getElementById('s5').addEventListener('click', f5());
// document.getElementById('s6').addEventListener('click', f6());
// document.getElementById('s7').addEventListener('click', f7());
// document.getElementById('s8').addEventListener('click', f8());


//functions that happen when a user clicks a div:
	function f0(){
		toggle(y);
		currentGameIcon();
		currentUserName();
		currentUser()[0] = 0; 
		console.log(currentUser());
		console.log(currentUserName());
		document.getElementById('s0').innerHTML = currentGameIcon();
		winChecker();
	}

	function f1(){
		toggle(y);
		currentGameIcon();
		currentUserName();
		currentUser()[1] = 1; 
		console.log(currentUser());
		console.log(currentUserName());
		document.getElementById('s1').innerHTML = currentGameIcon();
		winChecker();
	}
	function f2(){
		toggle(y);
		currentGameIcon();
		currentUserName();
		currentUser()[2] = 2; 
		console.log(currentUser());
		console.log(currentUserName());
		document.getElementById('s2').innerHTML = currentGameIcon();
		winChecker();
	}
	function f3(){
		toggle(y);
		currentGameIcon();
		currentUserName();
		currentUser()[3] = 3; 
		console.log(currentUser());
		console.log(currentUserName());
		document.getElementById('s3').innerHTML = currentGameIcon();
		winChecker();
	}
	function f4(){
		toggle(y);
		currentGameIcon();
		currentUserName();
		currentUser()[4] = 4; 
		console.log(currentUser());
		console.log(currentUserName());
		document.getElementById('s4').innerHTML = currentGameIcon();
		winChecker();
	}
	function f5(){
		toggle(y);
		currentGameIcon();
		currentUserName();
		currentUser()[5] = 5; 
		console.log(currentUser());
		console.log(currentUserName());
		document.getElementById('s5').innerHTML = currentGameIcon();
		winChecker();
	}
	function f6(){
		toggle(y);
		currentGameIcon();
		currentUserName();
		currentUser()[6] = 6; 
		console.log(currentUser());
		console.log(currentUserName());
		document.getElementById('s6').innerHTML = currentGameIcon();
		winChecker();
	}
	function f7(){
		toggle(y);
		currentGameIcon();
		currentUserName();
		currentUser()[7] = 7; 
		console.log(currentUser());
		console.log(currentUserName());
		document.getElementById('s7').innerHTML = currentGameIcon();
		winChecker();
	}
	function f8(){
		toggle(y);
		currentGameIcon();
		currentUserName();
		currentUser()[8] = 8; 
		console.log(currentUser());
		console.log(currentUserName());
		document.getElementById('s8').innerHTML = currentGameIcon();
		winChecker();
	}






