var nombreCompleto = [4];

var nombres = ["Erika " , "Itzel" , "Zane" , "Ale"];

var apellidos = ["Flores" , "Olvera" , "Rojas" , "Gonzalez"];

for (var i = 0 ; i < nombreCompleto ; i++){

	var nomTemporal= nombres.shift() + " " + apellidos.shift();
	nombreCompleto.push(nomTemporal);
	//console.log(nomTemporal);
	console.log(nombreCompleto);

}


