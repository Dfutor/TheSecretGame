let randomNumber;
let intentos;
let listaNumerosElegidos = [];
let maxIntentos = 10;
// pepito peres
function asignarTextoElemento(elemento, texto){
  const parragraph = document.querySelector(elemento);

  if (!parragraph) return console.warn('Elemento no encontrado');

  parragraph.innerHTML = texto;
}

function verificarIntento() {
  let numberUser = parseInt(document.getElementById('numberUser').value);

  if (isNaN(numberUser) || numberUser < 1 || numberUser > maxIntentos) {
    asignarTextoElemento('p', `Por favor, ingresa un número válido entre 1 y ${maxIntentos}.`);
    limpiarInput();
    return;
  }

  if (numberUser === randomNumber) {
    asignarTextoElemento('p',` Intento: ${intentos}, Has ganado! El número secreto era`+ randomNumber + '.');
    finalizarJuego()
  } else {
    const message = numberUser < randomNumber
      ? 'El número ingresado es menor que el número secreto.'
      : 'El número ingresado es mayor que el número secreto.';

    asignarTextoElemento('p',message);
    intentos++;

    if (intentos > maxIntentos) {
      asignarTextoElemento('p', `Has perdido! El número secreto era ${randomNumber}. Inténtalo de nuevo.`);
      finalizarJuego()
    }

    limpiarInput();
  }
}

function generarNumeroAleatorio(rango){
  if (listaNumerosElegidos.length >= rango) {
    asignarTextoElemento('p','Ya todos los números han sido elegidos. Reinicia el juego para elegir otro número. 10 intentos restantes.');
    listaNumerosElegidos = [];
  }

  let nuevoNumero;
  do {
    nuevoNumero = Math.floor(Math.random() * rango) + 1;
  } while (listaNumerosElegidos.includes(nuevoNumero));

  listaNumerosElegidos.push(nuevoNumero);
  return nuevoNumero;
}

function limpiarInput(){
  document.querySelector('#numberUser').value = '';
}

function condicionesIniciales(){
  asignarTextoElemento('h1','Juego del número secreto.');
  asignarTextoElemento('p','Adivina el número secreto entre 1 y 10.');
  randomNumber = generarNumeroAleatorio(maxIntentos);
  intentos = 1;

  document.getElementById('numberUser').disabled = false;
  document.getElementById('btnAdivinar').disabled = false;
  document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

function finalizarJuego() {
  document.getElementById('numberUser').disabled = true;
  document.getElementById('btnAdivinar').disabled = true;
  document.getElementById('reiniciar').removeAttribute('disabled');
}

function reiniciarJuego() {
  limpiarInput();
  condicionesIniciales();
}

condicionesIniciales();