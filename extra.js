var board = document.getElementsByClassName('cell');
for(var 9 = 0; i < board.length; i++)
	var myCell = board[i]
	myCell.onclick = function(){ this.innerHTML = "clicked!"; }

	//or take out the middle for 

for(var i = 0; i < board.length; i++){
	myCells[i].addEventListener('mouseenter', function() { this.innerHTML = "swanky!"} )
}
myCells[i].addEventListener("click", makeClicker(i) );

function makeClicker(id) {
	return function(){
			this.innerHTML = id;
	};
}

mine would be:

function makeClicker(value){
	return function(){
		this.value = value;
	};
}
var myClicker = makeClicker(100);  // for example

document.getElementsByClassName('cell')[0]
var myCell = document.getElementsByClassName('cell')[0]

mycell.onclick


make a master f():
function makeClicker(i){
	return function(){
		i = ?
	}
}
var myClicker2 = makeClicker(2);

//to execute:

myClicker2();

//try again:

var myCells = document.getElementsByClassName('gamespot');
function makeClicker(id){
	return function(){
		this.innerHTML = id;
	};
}
for(var i = 0; i < myCells.length; i++){
	myCells[i].onclick = makeClicker(i);
}
function (){
	this.innerHTML = id;
}
//that changes the ID.
//To get the value, I should grab each value and push it into an array?

or//


document.getElementsByClassName('cell')[5].getAttribute('value');
//should return 5. Use the data-dash to store some piece of info on the element. 
// x-dash is also reserved for whatever you want to put in there.