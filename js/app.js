

var terrain = genererTablJs(1, 10,5);
var col= 10;
var line=5;

affiche(10,5, terrain);
$('#generate').click(function() {
	
setInterval(function(){



 	for (var i = 0; i < line; i++) {
 		for (var j = 0; j < col; j++) {
 			if( terrain[i][j].type === 'fourmi'){
 				terrain[i][j].move();
 			}
 		}
 	
 	}

	affiche(10, 5, terrain);

 },1000);

});

function deplacement() {
	var a = this.x;
	var b = this.y;
	var destinationX;
	var destinationY;
	console.log(a);
	console.log(b);
	var result = Math.floor(Math.random()*3);
		if (result === 0){
			destinationY = b-1;
			destinationX = a;
		}else if(result === 1){
			destinationY = b;
			destinationX = a +1;
		}else if (result === 2){
			destinationY = b +1;
			destinationX = a;
		}else if(result === 3){
			destinationY = b;
			destinationX = a-1;
		}
		console.log(destinationX);
		console.log(destinationY);

		if (destinationY <0 || destinationY > col -1){
			this.move();
		}else if (destinationX < 0 || destinationX > line -1){
			this.move();
		}else{
			// TODOsi la case est occuper par une fourmi combat !!!
			//
			terrain[destinationY][destinationX] = {"type": 'fourmi',
													"x": destinationX,
													"y" : destinationY,
													"carac": '#',
													"move": deplacement};
			terrain[b][a] = {"type": 'casevide',
								"x": a,
								"y": b,
								"carac": "&nbsp"};
		}

}



function affiche(col, line, fourmi) {
	$('#vue').html('');
	for (var i = 0; i < line; i++) {
		var curling = '<tr>';
			for (var j = 0; j < col; j++) {
				curling += '<td>'+ fourmi[i][j].carac +'</td>';
			}
		curling += '</tr>';
		$('#vue').append(curling);
	}
}


function genererTablJs(val, col, line) {
	var tableGeneral = [];

	
	for (var k = 0; k < line; k++) {
		var tableSecondaire = [];
		for (var l = 0; l < col; l++) {
			var caseVide = {
				"type": 'casevide',
				"x": l,
				"y": k,
				"carac": "&nbsp"};
			tableSecondaire.push(caseVide);
		}
		//tableSecondaire.fill(caseVide, 0, col-1);
		tableGeneral.push(tableSecondaire);
	}


	for (var i = 0; i < val; i++) {
		var rndY = Math.floor(Math.random()*col);
		var rndX = Math.floor(Math.random()*line);
		//console.log(rndX);
		//console.log(rndY);
		var fourmi = {
			"type": 'fourmi',
			"x": rndY,
			"y" : rndX,
			"carac": '#',
			"move": deplacement
		};
		//console.log(col);
		//console.log(line);
		console.log(rndY);
		console.log(rndX);
		console.log(tableGeneral);
			if (tableGeneral[rndX][rndY].type === 'fourmi'){
				i--;
				continue;
			}
		tableGeneral[rndX][rndY] = fourmi;
		
	}
	return tableGeneral;
}






//console.log(terrain[6] === undefined);
//console.log(terrain[1][1] === undefined);

