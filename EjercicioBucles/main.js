//Ejercicio 1

function tablaDeMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

const numeroIngresado = parseInt(prompt("Ingresa un número:"));
tablaDeMultiplicar(numeroIngresado);

//Ejercicio 2

let acumulador = 0;
while (true) {
    const numero = parseInt(prompt("Ingresa un número (0 para terminar):"));
    if (numero === 0) {
        break;
    }
    acumulador += numero;
}

console.log(`La suma total es: ${acumulador}`);

//Ejercicio 3

function adivinarNumeroSecreto() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;

    while (true) {
        intentos++;
        const numeroUsuario = parseInt(prompt("Adivina el número secreto (entre 1 y 100):"));
        if (numeroUsuario < numeroSecreto) {
            console.log("El número secreto es mayor.");
        } else if (numeroUsuario > numeroSecreto) {
            console.log("El número secreto es menor.");
        } else {
            console.log(`¡Felicitaciones! Adivinaste el número en ${intentos} intentos.`);
            break;
        }
    }
}

adivinarNumeroSecreto();22

//Ejercicio 4

function esPrimo(numero) {
    if (numero < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

const numeroIngresado1 = parseInt(prompt("Ingresa un número:"));
if (esPrimo(numeroIngresado1)) {
    console.log(`${numeroIngresado1} es un número primo.`);
} else {
    console.log(`${numeroIngresado1} no es un número primo.`);
}

//Ejercicio 5

function mostrarDivisores(numero) {
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            console.log(i);
        }
    }
}

const numeroIngresado2 = parseInt(prompt("Ingresa un número:"));
mostrarDivisores(numeroIngresado2);


//Ejercicio 6

const miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const elemento of miArray) {
    console.log(elemento);
}


//Ejercicio 7

const numeros = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
for (const numero of numeros) {
    console.log(`El doble de ${numero} es ${numero * 2}`);
}


//Ejercicio 8

const familia = [
    { nombre: "Pepito", edad: 38, relacion: "padre" },
    { nombre: "Delilah", edad: 18, relacion: "hija" },
];

for (const persona of familia) {
    console.log(`Hola, soy ${persona.nombre}, tengo ${persona.edad} años y soy ${persona.relacion}.`);
}


//Ejercicio 9

const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const numero of numeros2) {
    if (numero % 2 !== 0) {
        console.log(numero);
    }
}


//Ejercicio 10

let sumaPares = 0;
let sumaImpares = 0;

while (true) {
    const numero = parseInt(prompt("Ingresa un número (0 para terminar):"));
    if (numero === 0) {
        break;
    }
    if (numero % 2 === 0) {
        sumaPares += numero;
    } else {
        sumaImpares += numero;
    }
}

console.log(`Suma de números pares: ${sumaPares}`);
console.log(`Suma de números impares: ${sumaImpares}`);



//Ejercicio 11
const numeros3 = [10, 20, 4, 45, 99];
let maximo = numeros3[0];

for (let i = 1; i < numeros3.length; i++) {
    if (numeros3[i] > maximo) {
        maximo = numeros3[i];
    }
}

console.log(`El número más grande es: ${maximo}`);


//Ejercicio 12
const numeros4 = [10, 20, 1, 45, 99];
let minimo = numeros4[0];

for (let i = 1; i < numeros4.length; i++) {
    if (numeros4[i] < minimo) {
        minimo = numeros[i];
    }
}

console.log(`El número más pequeño es: ${minimo}`);


//Ejercicio 13

function obtenerMano() {
    const opciones = ["piedra", "papel", "tijeras"];
    const indice = Math.floor(Math.random() * 3);
    return opciones[indice];
}

const jugador1 = prompt("Ingresa el nombre del jugador 1:");
const jugador2 = prompt("Ingresa el nombre del jugador 2:");

while (true) {
    const mano1 = obtenerMano();
    const mano2 = obtenerMano();

    console.log(`${jugador1} eligió ${mano1}`);
    console.log(`${jugador2} eligió ${mano2}`);

    if (mano1 === mano2) {
        console.log("Empate. ¡Sigan jugando!");
    } else if (
        (mano1 === "piedra" && mano2 === "tijeras") ||
        (mano1 === "papel" && mano2 === "piedra") ||
        (mano1 === "tijeras" && mano2 === "papel")
    ) {
        console.log(`${jugador1} gana.`);
        break;
    } else {
        console.log(`${jugador2} gana.`);
        break;
    }
}


//Ejercicio 14

for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}


//Ejercicio 15

for (let i = 5; i >= 1; i--) {
    console.log("*".repeat(i));
}


//Ejercicio 16

function ordenarArraySinSort(arrayDesordenado) {
    const arrayOrdenado = [...arrayDesordenado]; // Creo una copia del array original

    for (let i = 0; i < arrayOrdenado.length - 1; i++) {
        let minimo = i;

        for (let j = i + 1; j < arrayOrdenado.length; j++) {
            if (arrayOrdenado[j] < arrayOrdenado[minimo]) {
                minimo = j;
            }
        }

        // Intercambio los elementos
        if (minimo !== i) {
            const temp = arrayOrdenado[i];
            arrayOrdenado[i] = arrayOrdenado[minimo];
            arrayOrdenado[minimo] = temp;
        }
    }

    return arrayOrdenado;
}

const numerosDesordenados = [9, 4, 5, 1, 3, 7, 2, 8, 6, 10];
const numerosOrdenados = ordenarArraySinSort(numerosDesordenados);

console.log("Array ordenado:", numerosOrdenados);
