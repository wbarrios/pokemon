//Forma más avanzada y más correcta es usando: PROTOTYPE
function Pokemon(n,v,a)
{
	this.grito = "Pika!";
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.gritar = function ()
	{
		alert(this.grito);
	}
}

function inicio()
{
	var pikachu = new Pokemon("Pikachu", 100, 55);
	pikachu.vida = pikachu.vida - 13;
	
	nombrePokemon.innerText = pikachu.nombre;
	datosPokemon.innerText = "Nombre del Pokemon: " + pikachu.nombre + "\n" +
							"Vida del Pokemon: " + pikachu.vida + "\n" +
							"Ataque del Pokemon: " + pikachu.ataque + "\n" + 
							"Grito del Pokemon: " + pikachu.grito + "\n" +
							"Imagen del Pokemon: ";
	fotoPokemon.innerHTML = "<img src='" + pikachu.nombre + ".png' width='150'></img>";
}

// Asignación por valor
// Asignación por referencia

// function Pokemon(nombrePokemon, vidaPoke, ataPoke)
// {
	 //Declaración de objeto, el bloque termina en ;
//	 var estructuraPokemon =
//	 {
//		 nombre: nombrePokemon,
//		 vida: vidaPoke,
//		 ataque: ataPoke,
//		 datos: {tipo: "Tierra", debilidad: "Fuego"}
//	 };
//	 return estructuraPokemon;
// }

// var pikachu = Pokemon("Pikachu", 100, 55);
// var bulbasaur = Pokemon("Bulbasaur", 90, 50);

// console.log(bulbasaur);

//DOCUMENT OBJECT MODEL

// Los 3 principales objetos de javascript son:
//	 navigator: controla las opciones especiales del navegador
//	 window: controla la ventana, puedo obtener por ejemplo el alto y el ancho
//	 document: controla el código HTML

//Objeto
//	Variables
//	Funciones

// document.write("Hola mamá!");
// var pi = 3.141592654;
// floor: piso, ceil
// pi = Math.ceil(pi);
// document.write(pi);

// var maxima;
// maxima = Math.max( 2,23,4,5,12,23,23 );
// document.write(maxima);

// function mostrar(pos)
// {
// 	document.write(pos.coords.latitude + "," + pos.coords.longitude);
// }
// navigator.geolocation.getCurrentPosition( mostrar );

