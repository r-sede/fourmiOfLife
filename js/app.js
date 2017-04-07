function generateTable(line, col){
	for (var i = 0; i < line; i++) {
		$("#vue").append("<tr></tr>");	
		for (var j = 0;j  < col; j++) {
		$("#vue tr:last-child").append('<td data-position="'+[i]+[j]+'">'+"&nbsp"+'</td>');
		}
	}

}
		
function placeFourmi(val, line, col){
	for (var i = 0; i <val; i++) {
	var rndx= Math.round(Math.random()*(col-1));
	var rndy= Math.round(Math.random()*(line-1));
	//console.log(rndx);
	//console.log(rndy);
	var cible= $("#vue").find('[data-position="'+rndx+''+rndy+'"]');
	if(cible.html()==='<span class="Fourmi">#</span>'){
		i--;
		continue;
	}
	cible.html('<span class="Fourmi">#</span>');
	}
}

function deplacements(){
	var allTd=$("td");
	for (var i = 0; i <allTd.length; i++) {
		var x=allTd[i];
		console.log(x);
	}
}

function generate(col, lin, nbrFourm){
	var arr = genAntArr(col,lin);
	for (var i = 0; i <nbrFourm; i++) {
		var rndx= Math.round(Math.random()*(col-1));
		var rndy= Math.round(Math.random()*(lin-1));
		console.log("x",rndx,"Y",rndy);
	 	if(arr[rndy][rndx]){
	 		i--;
	 		continue;
	 	}
	 	arr[rndy][rndx]=true;
	 }
	return arr;
}


function genAntArr(col,lin){
	var res=[];
	var curline=[];
	for(var yy = 0; yy<lin;yy++){
		for (var xx = 0; xx < col; xx++) {
			curline.push(false);
		}
		res.push(curline);
		curline = [];
	}
	return res;
}











// generateTable(8, 8);
// placeFourmi(25, 8, 8);
// deplacements();
var a  = generate(12,6,5);
console.log(a);
// a[2][1]=true; );
// var arrr = genAntArr(10,7);
// arrr[2][1]=true;
// console.log(arrr);