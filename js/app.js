function afficheFourmi(arr){
	$('.cell').html('&nbsp');

	for(var i = 0;i<arr.length;i++){
		var cX = arr[i].posX;
		var cY = arr[i].posY;

		var valString = cX+''+cY;
		//console.log('valString',valString);
		$(".cell[value='"+valString+"']").html(arr[i].cara);
	}
}

function afficheTableauVide(colo,line){
	$('#vue').html('');
		for (var i = 0; i < line; i++) {
		var curling = '<tr>';
			for (var j = 0; j < colo; j++) {
				curling += '<td class="cell" value="'+j+''+i+'"></td>';
			}
		curling += '</tr>';
		$('#vue').append(curling);
	}

}

function isAFourmiAlreadyHere(x,y,arr){
	for (var i = 0;i<arr.length;i++){
		if(arr[i].posX===x && arr[i].posY===y){
			return true;
		}
	}
	return false;
}


function populate(w,h,nbr){
	var curFourmiArr = [];
	for (var i = 0; i < nbr; i++) {
		var rndX = Math.floor(Math.random()*w);
		var rndY = Math.floor(Math.random()*h);

		if(isAFourmiAlreadyHere(rndX,rndY,curFourmiArr)){
			i--;
			continue;
		}else{
			var curFourmi = new Fourmi(rndX,rndY,w,h);
			curFourmiArr.push(curFourmi);
		}
		
	}
	return curFourmiArr;
}

function myLoop(arr){
	//update
	for(var i = 0;i<arr.length;i++){
		arr[i].move();
	}
	//render
	afficheFourmi(arr);
}


var Fourmi = function(x,y,w,h){
	this.posX = x;
	this.posY = y;
	this.w = w;
	this.h = h;
	this.type = "fourmi";
	this.cara = "#";
};

Fourmi.prototype.move = function(){

	var destinationX;
	var destinationY;

	//choisir une direction au hasard 
	var result = Math.random();
		if (result >= 0.75){
			destinationY = this.posY-1;
			destinationX = this.posX;
		}else if(result >= 0.5){
			destinationY = this.posY;
			destinationX = this.posX +1;
		}else if (result >= 0.25){
			destinationY = this.posY +1;
			destinationX = this.posX;
		}else{
			destinationY = this.posY;
			destinationX = this.posX-1;
		}
		// console.log(destinationX);
		// console.log(destinationY);

		if (destinationY <0 || destinationY > this.h -1 || destinationX < 0 || destinationX > this.w -1){
			this.move();
		}else{
			//TODO check if there already a Fourmi
			this.posX = destinationX;
			this.posY = destinationY;
		}
};

$(document).ready(function(){
	var inter = 200;
	var col = 10;
	var lin = 5;
	var nbrDeFourmi = 4;
	var fourmisArray = populate(col,lin,nbrDeFourmi);
	afficheTableauVide(col,lin);
	//console.log(fourmisArray);
	setInterval( function(){myLoop(fourmisArray);}, inter );
});

