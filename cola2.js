function Queue(){

	this.dataStore = [];
	//Array.prototype.slice.call(argumets,0);
	this.encolar = encolar;
	this.desencolar = desencolar;
	this.vacia = vacia;

	this.imprime = imprime;

	//funcion que encola un nuevo elemento
	//Recibe como parametro el elemento que se va a agregar
	function encolar (elemento){

		this.dataStore.push(elemento);
	}


	//Retira el primer elemento de la cola 
	function desencolar (){

		return this.dataStore.shift();
	}
	//Metodo auxiliar que determina si esta vacia la cola
	//Retorna con valores booleanos
	function vacia(){

		return this.dataStore.length==0;

	}

	//Imprime los elementos que hay en la cola

	function imprime(elemento){
		return console.log(this.dataStore);


	}
}

//creamos una nueva instancia de la cola nombre y apellido
var colaNombre = new Queue();
var colaApellido = new Queue();

//Creamos un arreglo vacio de longitud 5
var nombres = [];
//Agrega los elementos mediante el metodo encolar
colaNombre.encolar("Nom1");
colaNombre.encolar("Nom2");
colaNombre.encolar("Nom3");
colaNombre.encolar("Nom4");


//Agregamos los elementos a la cola Apellidos mediante e
//el metodo encolar 

colaApellido.encolar("Apellido1");
colaApellido.encolar("Apellido2");
colaApellido.encolar("Apellido3");
colaApellido.encolar("Apellido4");


//imprimimos los elementos de ambas colas
colaNombre.imprime();

console.log("Cola apellidos: ")

colaApellido.imprime();

//


//Recorremos mediante FIFO las colas para llenar el arreglo nombres 
for (var i = 0 ; i < 5 ; i++){
	nombres.push(colaNombre.desencolar() + " " +colaApellido.desencolar());
	//ombres.shift() + " " + apellidos.shift();
}


console.log(nombres);