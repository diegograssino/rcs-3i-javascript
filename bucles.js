// CONDICIONALES: Condiciones compuestas (&&, ||, !)

// Escriba un algoritmo que pueda evaluar si un número esta dentro del rango de 5 a 10.

// let numero = prompt("Ingrese un número: ");

// if ( numero >= 5 && numero <=10 ){
// 	alert("El número es menor o igual que 5 que 10.")
// }

// if ( numero >5 || (numero%2===0)) {
// 	alert("El número es par o es mayor que 5.")
// }

// if ( numero%2 !== 0 ) {
// 	alert("El número es impar.");
// }

// isLogged <--- Significaria si esta logueado el usario.

// 1)

// Escribe un algoritmo que muestre los numeros del 1 al 10.

// let i = 1;

// while (i <= 10) {
// 	alert(i);
// 	i++;
// };

// Escribe un algoritmo que muestre los numeros del 1 al 10 de mayor a menor.

// let i = 10;

// while ( i >= 1) {
// 	alert(i);
// 	i--;
// };

// Escribe un algoritmo que muestre si cada uno de los numeros del 1 al 10 son múltiplos de 2.

// let i = 1;

// while (i<=10) {
// 	if (i%2===0) {
// 		alert(i + " es par.")
// 	}
// 	i++;
// };

// SOLUCIÓN REFACTORIZADA
// let i = 2;

// while (i <= 10) {
// 	alert(i);
// 	i = i + 2;
// }

// Simule un estado de logueo con usuario y contraseña y, solo si no esta logueado, muestre un mensaje de error.

// let estaLogueado = false;

// while ( estaLogueado = false ) {
// 	alert("Logueate para poder ver el contenido.");
// Proceso de que el usuario se loguee
// }

// Simule un ingreso de un numero de telefono en un formulario y valide si el dato es correcto por la cantidad de digitos.


// 2)

// (AHORA CON FOR) Escribe un algoritmo que muestre los numeros del 1 al 10.

// for (let index = 1; index < 11; index++) {
// Bloque de codigo
// 	alert(index);
// }

// (AHORA CON FOR) Escribe un algoritmo que muestre los numeros del 1 al 10 de mayor a menor.

// for (let registrosDeLaBaseDeDatos = 10; registrosDeLaBaseDeDatos > 0; registrosDeLaBaseDeDatos--) {
// // Bloque de codigo
// 	alert(registrosDeLaBaseDeDatos);
// }

// (AHORA CON FOR) Escribe un algoritmo que muestre si cada uno de los numeros del 1 al 10 son múltiplos de 2.

// Escribe un algoritmo que muestre solo los numeros pares del 1 al 10

// Genere CON LAS HERRAMIENTAS QUE TENEMOS HASTA AHORA un juego de 10 preguntas y respuestas donde cada respuesta correcta sume un punto. Al final del juego debe mostrar cuantos puntos sumo el jugador.


// let puntuacion = 0;
// let respuesta = "";

// for (let index = 0; index < 10; index++) {
// 	// Bloque de codigo



// 	switch (index) {
// 		case 0:
// 			respuesta = prompt("¿Empanada, con o sin papa?");
// 			if (respuesta.toUpperCase() === "SIN") {
// 				puntuacion = puntuacion + 1;
// 				alert("CORRECTO!");
// 			} else {
// 				alert("ERROR!");
// 			}
// 		break;

// 		case 1:
// 			respuesta = prompt("¿Empanada, con o sin papa?");
// 			if (respuesta.toUpperCase() === "SIN") {
// 				puntuacion = puntuacion + 1;
// 				alert("CORRECTO!");
// 			} else {
// 				alert("ERROR!");
// 			}

// 			break;
// 		// case 3:
			
// 		// 	break;
// 	}
	
// }

// alert(puntuacion);

const array = [1,2,3];

for (let index = 0; index < array.length; index++) {
	const element = array[index];
	alert(element);
}

// Genere CON LAS HERRAMIENTAS QUE TENEMOS HASTA AHORA un algoritmo que pida dos numeros y la operacion a realizar (+, -, *, /) y muestre el resultado. Validar que los datos ingresados sean correctos y volver a pedirlos si es necesario.





