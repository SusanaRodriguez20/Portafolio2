/* 1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años"
Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings*/
function resolverEjercicio1(){
const nombre = prompt("Ingresa tu nombre:");
const edad = parseInt(prompt("Ingresa tu edad:"));
const edadProximoAnio = edad + 1;
const mensaje = `Hola ${nombre}, tienes ${edad} años y el año que viene tendrás ${edadProximoAnio} años.`;
console.log(mensaje);
}
/*2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo.
En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
    triángulo = b * h/2
    rectángulo = b * h
    círculo = π * r2 (pi * radio al cuadrado)*/
    function resolverEjercicio2(){
const figura = prompt(
  "¿De qué figura deseas calcular el área? (triángulo, rectángulo o círculo)"
).toLowerCase();
if (figura === "triangulo") {
  const base = parseFloat(prompt("Ingresa la base del triángulo:"));
  const altura = parseFloat(prompt("Ingresa la altura del triángulo:"));
  const area = (base * altura) / 2;
  console.log(`El área del triángulo es: ${area}`);
} else if (figura === "rectangulo") {
  const base = parseFloat(prompt("Ingresa la base del rectángulo:"));
  const altura = parseFloat(prompt("Ingresa la altura del rectángulo:"));
  const area = base * altura;
  console.log(`El área del rectángulo es: ${area}`);
} else if (figura === "circulo") {
  const radio = parseFloat(prompt("Ingresa el radio del círculo:"));
  const area = Math.PI * Math.pow(radio, 2);
  console.log(`El área del círculo es: ${area}`);
} else {
  console.log(
    "Figura no reconocida. Por favor, ingresa 'triangulo', 'rectangulo' o 'circulo'."
  );
}
    }
/*
3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar"
    si el número es 5 el resultado será:
        1 - es impar
        2 - es par
        3 - es impar
        4 - es par
        5 - es impar*/
        function resolverEjercicio3(){
        const numero = parseInt(prompt("Ingresa un número:"));

if (!isNaN(numero) && numero > 0) {
  for (let i = 1; i <= numero; i++) {
    if (i % 2 === 0) {
      console.log(`${i} - es par`);
    } else {
      console.log(`${i} - es impar`);
    }
  }
} else {
  console.log("Por favor, ingresa un número entero mayor que 0.");
}
        }
        
  /*4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no.
    Un número primo es aquel que solo es divisible por sí mismo y la unidad*/
    function resolverEjercicio4(){
    const numero4 = parseInt(prompt("Ingresa un número entero mayor que 1:"));
  function esPrimo(n) {
    if (n <= 1) {
      return false;
    }
    if (n <= 3) {
      return true;
    }
    if (n % 2 === 0 || n % 3 === 0) {
      return false;
    }
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }
  if (esPrimo(numero4)) {
    console.log(`${numero4} es un número primo.`);
  } else {
    console.log(`${numero4} no es un número primo.`);
  }
}
  /*5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial.
    El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.

    !5 = 5*4*3*2*1 = 120*/
    function resolverEjercicio5(){
  const numero5 = parseInt(prompt("Ingresa un número entero mayor que cero:"));
  function calcularFactorial(n) {
    if (n === 0) {
      return 1;
    } else if (n < 0) {
      return "No se puede calcular el factorial de un número negativo.";
    } else {
      let factorial = 1;
      for (let i = 1; i <= n; i++) {
        factorial *= i;
      }
      return factorial;
    }
  }
  const resultado5 = calcularFactorial(numero5);
  if (typeof resultado5 === "number") {
    console.log(`El factorial de ${numero5} es: ${resultado5}`);
  } else {
    console.log(resultado5);
  }
    }
  /*6 - Escribe un programa que permita ir introduciendo una serie indeterminadade números mientras su suma no supere 50.
   Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido*/
   function resolverEjercicio6(){
   let suma = 0;
  let contador = 0;
  while (suma <= 50) {
    const numero6 = parseFloat(prompt("Introduce un número:"));
    if (isNaN(numero6)) {
      console.log("¡Ingresa un número válido!");
      continue;
    }
    suma += numero6;
    contador++;
  }
  console.log(`La suma total es: ${suma}`);
  console.log(`Se introdujeron ${contador} números.`);
   }
  /*7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos.
   Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par
    guarda ese número en el array de pares y si es impar en el array de impares. Muestra por consola:
    -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6
    -el array de pares e impares¨*/
    function resolverEjercicio7(){
    const numeros = [5, 8, 3, 6, 9];
    const pares = [];
    const impares = [];
    for (let i = 0; i < numeros.length; i++) {
      const numero = numeros[i];
      const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
      const resultado = numero * numeroAleatorio;
    
      console.log(`${numero} x ${numeroAleatorio} = ${resultado}`);
    
      if (resultado % 2 === 0) {
        pares.push(resultado);
      } else {
        impares.push(resultado);
      }
    }
    console.log("Números pares:", pares);
    console.log("Números impares:", impares);
}

  /*8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede ser negativo ni tener más de 8 dígitos. 
  La posición de la letra es el resultado del módulo del número introducido entre 23
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
*/
function resolverEjercicio8(){
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

const numeroDNI = prompt("Ingresa el número de DNI (sin la letra):");

if (/^\d{1,8}$/.test(numeroDNI)) {
  const posicionLetra = numeroDNI % 23;
  const letra = letras[posicionLetra];
  console.log(`La letra del DNI ${numeroDNI} es: ${letra}`);
} else {
  console.log("Número de DNI no válido. Debe ser un número no negativo de hasta 8 dígitos.");
}
}
  /*9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.
const palabra9 = prompt("Ingresa una palabra:");*/
let palabra9; // Declara la variable palabra9 fuera de la función

function resolverEjercicio9() {
  palabra9 = prompt("Ingresa una palabra:"); // Asigna un valor a palabra9

  function contarConsonantesYVocales(palabra) {
    let consonantes = 0;
    let vocales = 0;
    for (let i = 0; i < palabra.length; i++) {
      const letra = palabra[i].toLowerCase();
      if (letra.match(/[a-z]/i)) {
        if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
          vocales++;
        } else {
          consonantes++;
        }
      }
    }
    return { consonantes, vocales };
  }

  const longitud9 = palabra9.length;
  const { consonantes, vocales } = contarConsonantesYVocales(palabra9);

  console.log(`Palabra: ${palabra9}`);
  console.log(`Longitud: ${longitud9}`);
  console.log(`Consonantes: ${consonantes}`);
  console.log(`Vocales: ${vocales}`);
}

  /*10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por 
  el usuario a través de un prompt se encuentra dentro del array o no. */
  function resolverEjercicio10(){
  const colores10 = ["azul", "amarillo", "rojo", "verde", "rosa"];
  const colorUsuario10 = prompt("Introduce un color:");
  const colorUsuarioMin10 = colorUsuario10.toLowerCase();
  if (colores10.includes(colorUsuarioMin10)) {
    console.log(`El color "${colorUsuarioMin10}" se encuentra en el array.`);
  } else {
    console.log(`El color "${colorUsuarioMin10}" no se encuentra en el array.`);
  }
}
        
