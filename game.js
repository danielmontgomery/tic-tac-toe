var win1 = [0, 1, 2];
var win2 = [3, 4, 5];
var win3 = [6, 7, 8];
var win4 = [0, 3, 6];
var user1 = [0, , 2, 3, , , , 7, 8];
var user2 = [ 3, 4, 5,];


// if (user1.contains(win4[])) {
// 	console.log("Winner");
// }
// else {
// 	console.log("Loser");
// }

// var idx = user1.indexOf(win4);
// console.log(idx);
// var pdx = user2.indexOf(win2);
// console.log(pdx);

// var indices [];

Array.prototype.contains = function(k) {
	for(var i = 0; i < this.length; i++) {
		if(this[i] === k) {
			return true;
		}
	}
	return false;
}

user1.contains(0)