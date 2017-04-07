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














generateTable(8, 8);
placeFourmi(25, 8, 8);
deplacements();
