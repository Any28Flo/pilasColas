
function Queue(){

	this.dataStore = [];
	//Array.prototype.slice.call(argumets,0);
	this.encolar = encolar;
	this.desencolar = desencolar;
	this.vacia = vacia;

	this.imprime = imprime;
	this.frente = frente;
	this.ultimo= ultimo;
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

	function frente(){

		return console.log(this.dataStore[0]);
	}

	function ultimo(){

		return console.log(this.dataStore[this.dataStore.length-1]);
	}
}

function pideDatos(){

	var dato = prompt ("Dame nombre: ");
	return dato;
}

var elementos = prompt ("Cuantos usuarios deseas ingresar?");


var colaUsuarios = new Queue();


var arreglo = [elementos];

for ( var i = 0 ; i< elementos ; i++){

	
	var usuario = prompt ("Dame nombre: ");
	colaUsuarios.encolar(usuario);


}

console.log("como fueron llegando: ");
colaUsuarios.imprime();
console.log("El primer elemento: ");

colaUsuarios.frente();
console.log("El ultimo elemento: ");
colaUsuarios.ultimo();