var nombres = [5];

var arrNombre = ["Erika" , "Itzel"  , "Zane" , "Ale" , "Lorena" ];

var apellidos = ["Flores" , "Olvera" , "Rojas" , "Gonzalez" , "Velazco"];


for ( var i = 0  ; i < nombres ; i++){

	 var nomtemporal= arrNombre.pop() + " "+ apellidos.pop();

	 //nombres.push(nomtemporal);


	 console.log(nomtemporal);
}