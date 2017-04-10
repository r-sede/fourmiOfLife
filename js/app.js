

var fourmiJs = genererTablJs(1, 10,5);
var col= 10;
var line=5;
// $('#generate').click(function() {
	
// setInterval(function(){
//  	for (var i = 0; i < line; i++) {
//  		for (var j = 0; j < col; j++) {
//  			if( fourmiJs[i][j].type === 'fourmi'){
//  				fourmiJs[i][j].move();
//  			}
//  		}
 	
//  	}


//  },1000);
// genererTableHtml(10, 5, fourmiJs);

// });

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
			fourmiJs[destinationY][destinationX] = {"type": 'fourmi',
													"y" : destinationY,
													"x": destinationX,
													"carac": '#',
													"move": deplacement};
			fourmiJs[b][a] = {"type": 'casevide',
								"x": a,
								"y": b,
								"carac": "&nbsp"};
		}

}



function genererTableHtml(col, line, fourmi) {
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





genererTableHtml(10,5, fourmiJs);


//console.log(fourmiJs[6] === undefined);
//console.log(fourmiJs[1][1] === undefined);

