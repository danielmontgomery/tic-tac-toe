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
var user1Name = "Player 1";
var user2Name = "Player 2";
//The lastUser variable 
var lastUser = user1.slice();
var lastUserName;
console.log(lastUser);
var currentGameIcon;
var gameIcon1 = "o";
var gameIcon2 = "x";
var y = false;
var i = 0
var x = document.getElementsByClassName("gameSpot");

var value;
// to make it increment on click, I need to do the following:
// ------------------------
// Us a loop to push values from the HTML DOM into a separate array, then push that array into my userArray. 
// ------------------------

// var myFunction = function() {
// 	var attribute = x.value('gamespot');
// 	alert(attribute);
// }

// for(var i = 0; i < x.length; ++i){

// // var myGamePiece = x[i];

// 	// x[i].addEventListener("click", myFunction(), false) 
// // 		function evaluate(){
// // 		console.log[i];
// // // }
// ==========================
// A loop for only the square that is clicked. I don't want to run through a loop that clicks every square in order. Can I push the values from here into an array::
var square0 = f0();
function f0(){
	square0 = document.getElementById("s0").getAttribute('value');
	square0.parseInt
	return(square0);
}


		// console.log(this);
		// userChoice = this;
		// console.log(this);
//Ok, starting over on this part of the function:
function makeClicker(value){
	return function(){
		value = this.value;
		console.log(value);
	}
}

for(var i = 0; i < x.length; i++){
	x[i].onclick = makeClicker(i);


		function toggle(){
			y = !y;
		}
		toggle(y);
		console.log(y);
		if(y === true){
				currentUser = user1;
			currentUserName = user1Name;
			currentGameIcon = gameIcon1;
			 x[i].className = "closed";

			console.log(i);
				   user1[i] = i;
			console.log(user1[i]);
			}
		else if(y === false){
				currentUser = user2;
			currentUserName = user2Name;
			currentGameIcon = gameIcon2;
			x[i].className = "open";
			user2[i] = [i];
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
			// return(false);
		}
		else {
			// return(true);
		}
	// },);
};
// </script>