function Pila(){

	var arreglo =  [];


	//declarando variables que hacen referencia a metodos
	//hace referencia a una funcion anonima que recibe
	//como parametro un elemento y lo inserta mediante
	//el metodo push
	this.push = function (element){

		arreglo.push(element);

	};
	/*Se basa en el pricipio LIF(O 
		que hace llamada a la funcion pop que elimina el 
		ultimo elemento en un arreglo 
	
		*/
		this.pop = function(){
	
			return arreglo.pop();
		};
	
	
	
		/*Funcion que permite er el valor del ultimo
		elemento 
	
		*/
	
		this.peek = function(){
			return arreglo[arreglo.length -1 ];
		};
		/*Funcion que retorna:
			TRUE = VACIA
			FALSE = SI TIENE ELEMENTOS 
	
		*/
		this.isEmpy = function(){
	
			return arreglo.length == 0 ;
		};
		//Uniccamente nos va a retornar la longitud el arreglo 
		this.size = function(){
	
			return arreglo.length;
		};
		//Limpiar la pila 
		this.clear = function(){
			arreglo = [];
		};
		//Imprime todos los datos de la pila y los convierte a un string

		this.imprimeDatos = function(){

			console.log(arreglo.toString());
		}
}


var nombres =[]
//Instancia de una clase PILA 
var nombre = new Pila();

var apellido = new Pila();


//Insertamos valores en la pila nombre

nombre.push("Erika");
nombre.push("Itzel");
nombre.push("Zane");
nombre.push("Lore");


nombre.imprimeDatos();


